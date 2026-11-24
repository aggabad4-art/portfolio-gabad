"""
Python serverless function para sa Vercel.
URL pagkatapos i-deploy:  https://<your-site>.vercel.app/api/hello

Nagbabalik ito ng greeting base sa oras sa Pilipinas (UTC+8).
"""
from http.server import BaseHTTPRequestHandler
from datetime import datetime, timezone, timedelta
import json


def get_greeting() -> str:
    ph_time = datetime.now(timezone.utc) + timedelta(hours=8)
    hour = ph_time.hour
    if hour < 12:
        return "Good morning! ☀️"
    if hour < 18:
        return "Good afternoon! 🌤️"
    return "Good evening! 🌅"


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        body = json.dumps(
            {"greeting": get_greeting(), "owner": "April Grace P. Gabad"},
            ensure_ascii=False,
        ).encode("utf-8")

        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)
