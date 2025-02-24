
import psycopg2
from psycopg2.extras import RealDictCursor
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
#per vedere l'ip della macchina sotto linux ip addr show
# Configurazione database
db_config = {
    "host": "172.18.0.1",  # Cambio con l'indirizzo IP della macchina
    "port": "5432",
    "dbname": "Accademia",
    "user": "postgres",
    "password": "postgres"
}

def get_db_connection():
    try:
        return psycopg2.connect(**db_config, cursor_factory=RealDictCursor)
    except Exception as e:
        return str(e)

@app.route('/1', methods=['GET'])
def get_wp():
    
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM wp")
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
    

@app.route('/2', methods=['GET'])
def get_assenza():
    
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM assenza")
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
    

@app.route('/3', methods=['GET'])
def get_persona():
    
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM persona")
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
   
@app.route('/4/<string:table_name>', methods=['GET'])
def get_table(table_name):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        query = f"SELECT * FROM {table_name}"
        cursor.execute(query)
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
    except psycopg2.Error as e:
        return jsonify({"error": f"Errore nel database : {str(e)}"}), 500
    

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)