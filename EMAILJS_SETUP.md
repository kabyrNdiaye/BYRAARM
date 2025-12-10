# 📧 Configuration EmailJS pour BYFAARM

Ce guide vous explique comment configurer EmailJS pour que les messages du formulaire de contact soient envoyés à **byfag@gmail.com**.

## 🚀 Étapes de Configuration

### Étape 1 : Créer un compte EmailJS (Gratuit)

1. **Allez sur [emailjs.com](https://www.emailjs.com)**
2. **Cliquez sur "Sign Up"** (Inscription)
3. **Créez un compte gratuit** (avec Google, GitHub, ou email)
4. **Confirmez votre email** si nécessaire

### Étape 2 : Ajouter un Service Email

1. **Dans le dashboard**, allez dans **"Email Services"**
2. **Cliquez sur "Add New Service"**
3. **Choisissez "Gmail"** (ou votre service email)
4. **Connectez votre compte Gmail** (byfag@gmail.com)
5. **Autorisez EmailJS** à envoyer des emails depuis votre compte
6. **Notez le "Service ID"** (ex: `service_xxxxx`)

### Étape 3 : Créer un Template Email

1. **Allez dans "Email Templates"**
2. **Cliquez sur "Create New Template"**
3. **Configurez le template** :

   **Subject (Sujet)** :
   ```
   Nouveau message depuis BYFAARM - {{from_name}}
   ```

   **Content (Contenu)** :
   ```
   Nouveau message reçu depuis le site BYFAARM
   
   Nom: {{from_name}}
   Email: {{from_email}}
   Téléphone: {{phone}}
   
   Message:
   {{message}}
   
   ---
   Ce message a été envoyé depuis le formulaire de contact du site BYFAARM.
   ```

4. **Cliquez sur "Save"**
5. **Notez le "Template ID"** (ex: `template_xxxxx`)

### Étape 4 : Obtenir votre Public Key

1. **Allez dans "Account"** → **"General"**
2. **Trouvez "Public Key"**
3. **Copiez la clé** (ex: `xxxxxxxxxxxxx`)

### Étape 5 : Mettre à jour le code

1. **Ouvrez le fichier `script.js`**
2. **Remplacez les valeurs suivantes** :

   ```javascript
   // Ligne ~142 - Remplacez YOUR_PUBLIC_KEY
   emailjs.init("VOTRE_PUBLIC_KEY_ICI");
   
   // Ligne ~165 - Remplacez YOUR_SERVICE_ID et YOUR_TEMPLATE_ID
   emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', formData)
   ```

   **Exemple** :
   ```javascript
   emailjs.init("abc123xyz789");
   emailjs.send('service_abc123', 'template_xyz789', formData)
   ```

### Étape 6 : Tester

1. **Ouvrez votre site** dans le navigateur
2. **Remplissez le formulaire de contact**
3. **Envoyez un message de test**
4. **Vérifiez votre boîte mail** (byfag@gmail.com)

---

## ✅ Vérification

Après configuration, tous les messages du formulaire seront automatiquement envoyés à **byfag@gmail.com** avec :
- Le nom de l'expéditeur
- Son email
- Son numéro de téléphone
- Son message

---

## 🆘 Problèmes courants

### Les emails ne sont pas reçus
- Vérifiez que le service email est bien connecté
- Vérifiez les IDs dans le code (Service ID, Template ID, Public Key)
- Consultez la console du navigateur pour les erreurs

### Erreur "Invalid Public Key"
- Vérifiez que vous avez copié la bonne clé publique
- Assurez-vous qu'il n'y a pas d'espaces avant/après

### Erreur "Service ID not found"
- Vérifiez que le Service ID est correct
- Assurez-vous que le service email est actif

---

## 📝 Note importante

Le plan gratuit d'EmailJS permet :
- **200 emails/mois** (gratuit)
- Suffisant pour la plupart des sites

Si vous avez besoin de plus, vous pouvez passer à un plan payant.

---

**Configuration terminée ! 🎉**

