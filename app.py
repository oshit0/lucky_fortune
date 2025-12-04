from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

fortunes = [
    "Technology is the key to unlocking the future.",
    "Innovation is the engine of progress.",
    "The future belongs to those who can code and think.",
    "Technology changes the world, one line of code at a time.",
    "The best way to predict the future is to invent it.",
    "Code is poetry written in logic.",
    "The only limit to your creativity is your imagination.",
    "Technology is the tool that makes the dream possible.",
    "In the end, it's not the code that matters, but the problem it solves.",
    "The future is now, and it's powered by technology."
]

@app.route("/")
def index():
    fortune = "✨ Spin the wheel to reveal your fortune! ✨"
    return render_template("index.html", fortune=fortune)

@app.route("/fortune", methods=["GET"])
def get_fortune():
    fortune = fortunes[random.randint(0, len(fortunes) - 1)]
    return jsonify(fortune=fortune)

if __name__ == "__main__":
    app.run(debug=True)