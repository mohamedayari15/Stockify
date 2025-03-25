# 📌 Stockify - Gestion des Produits

Stockify est une application de gestion des stocks et des produits développée avec le **MEAN stack** (MongoDB, Express.js, Angular, Node.js).

## 🚀 Installation et Configuration

### 1️⃣ Cloner le projet  
Sur votre terminal, exécutez :

```bash
git clone https://github.com/ton_nom_utilisateur/stockify.git
cd stockify
```

---

### 2️⃣ Installer les dépendances  
📌 **Backend (Node.js + Express)**

```bash
cd backend
npm install
```

📌 **Frontend (Angular)**

```bash
cd ../frontend
npm install
```

---

### 3️⃣ Configurer la Base de Données  
MongoDB doit être installé et en cours d'exécution sur votre machine. Si ce n'est pas encore fait, démarrez MongoDB :

```bash
mongod
```

Dans le fichier `backend/config.js`, configurez l'URL de votre base MongoDB :

```javascript
module.exports = {
  mongoURI: "mongodb://localhost:27017/stockify"
};
```

---

### 4️⃣ Démarrer les serveurs  

📌 **Lancer le serveur backend** :

```bash
cd backend
node server.js
```

📌 **Lancer le serveur frontend** :

```bash
cd frontend
ng serve --open
```

---

## 🗂 Importer la Base de Données

Si vous souhaitez importer la base de données, suivez ces étapes :

### 🔹 **Option 1 : Importer depuis un fichier JSON**
Exécutez la commande suivante pour importer les collections :

```bash
mongoimport --uri="mongodb://localhost:27017/stockify" --collection=products --file=db_backup/products.json --jsonArray
```

Faites la même chose pour les autres collections si nécessaire.

---

### 🔹 **Option 2 : Restaurer un Backup Complet**
Si un dossier `backup/` est disponible dans le projet, vous pouvez restaurer toute la base de données avec :

```bash
mongorestore --uri="mongodb://localhost:27017/stockify" backup/stockify
```

---

## ✅ Vérification
Ouvrez **MongoDB Compass**, connectez-vous à `mongodb://localhost:27017/stockify`, et vérifiez si les collections sont bien ajoutées.

Vous pouvez aussi exécuter cette commande dans le terminal :

```bash
mongo
use stockify
show collections
db.products.find().pretty()
```

---

## 🎯 Fonctionnalités Principales
✅ Ajouter, modifier et supprimer des produits
✅ Gérer les stocks en temps réel
✅ Authentification et gestion des utilisateurs
✅ Génération de rapports

---

## 📩 Contact
Si vous avez des questions ou des suggestions, n’hésitez pas à me contacter.

🚀 Bon développement avec **Stockify** !

