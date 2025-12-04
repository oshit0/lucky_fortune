from flask import Flask, render_template, request, redirect, url_for, jsonify
import random

app = Flask(__name__)

fortunes = [
    "Technology is the key to unlocking the future.",
    "Innovation is the engine of progress.",
    "The future belongs to those who can code and think.",
    "Technology changes the world, one line of code at a time.",
    "The best way to predict the future is to invent it.",
    "Code is like sex: it's often messy, but the results are worth it.",
    "The only limit to your creativity is your imagination.",
    "Technology is the tool that makes the dream possible.",
    "In the end, it's not the code that matters, but the problem it solves.",
    "The future is now, and it's powered by technology."
]

@app.route("/")
def chat():
    fortunal = "Click button to get fortune"
    return render_template("./index.html", fortune=fortunal)

@app.route("/fortune", methods=["GET"])
def get_fortune():
    fortune = fortunes[random.randint(0, 9)]
    return jsonify(fortune=fortune)

if __name__ == "__main__":
    app.run(debug=True)
