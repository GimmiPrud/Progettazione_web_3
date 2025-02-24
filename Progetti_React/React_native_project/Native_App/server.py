
import json
import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def db():
    try:
        
        json_file_path = './data/Shop.json'
        
      
        with open(json_file_path, 'r') as f:
            db_data = json.load(f)
        
            if isinstance(db_data, dict):
                return db_data
            else:
                return {"error": "Il contenuto non valido."}
    except Exception as e:
        return {"error": f"Errore nel caricamento dei dati: {str(e)}"}

@app.route('/magliette', methods=['GET'])
def get_magliette():
    try:
        fake_db = db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["magliette"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/scarpe', methods=['GET'])
def get_scarpe():
    try:
        fake_db = db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["scarpe"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/accessori', methods=['GET'])
def get_docente():
    try:
        fake_db = db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["accessori"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500



@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500



if __name__=="__main__":
    app.run(host="127.0.0.1", port=8080)