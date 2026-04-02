from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]


def fret_distance(note1, note2):

    i1 = notes.index(note1)
    i2 = notes.index(note2)

    diff = (i2 - i1) % 12

    return diff


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/calculate", methods=["POST"])
def calculate():

    data = request.json
    tuning = data["tuning"]

    results = []

    for i in range(1, len(tuning)):

        previous = tuning[i-1]
        current = tuning[i]

        fret = fret_distance(previous, current)

        results.append({
            "string": i+1,
            "note": current,
            "fret": fret
        })

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)
