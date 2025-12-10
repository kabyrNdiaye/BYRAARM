# 📧 Configuration Formspree pour byfaag@gmail.com

## ⚠️ IMPORTANT : Pour recevoir les emails automatiquement

Pour que les messages soient envoyés **directement** à **byfaag@gmail.com** sans ouvrir le client email, vous devez configurer Formspree.

## 🚀 Configuration en 5 minutes

### Étape 1 : Créer un compte Formspree
1. Allez sur **[formspree.io](https://formspree.io)**
2. Cliquez sur **"Get Started"** ou **"Sign Up"**
3. Créez un compte gratuit (avec Google, GitHub, ou email)

### Étape 2 : Créer un nouveau formulaire
1. Dans le dashboard, cliquez sur **"New Form"**
2. Nommez-le : **"BYFAARM Contact"**
3. **Copiez l'endpoint** qui apparaît (ex: `https://formspree.io/f/xjvqkzpn`)

### Étape 3 : Configurer les notifications email
1. Cliquez sur votre formulaire créé
2. Allez dans **"Settings"** → **"Email Notifications"**
3. Dans **"Send submissions to"**, ajoutez : **byfaag@gmail.com**
4. Cliquez sur **"Save"**

### Étape 4 : Mettre à jour le code
1. Ouvrez le fichier **`script.js`**
2. Trouvez la ligne **180** :
   ```javascript
   const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT';
   ```
3. Remplacez par votre endpoint Formspree :
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/VOTRE_ENDPOINT_ICI';
   ```
   
   **Exemple réel** :
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/xjvqkzpn';
   ```

### Étape 5 : Tester
1. Ouvrez votre site dans le navigateur
2. Remplissez le formulaire de contact
3. Cliquez sur **"Envoyer le message"**
4. Vous devriez voir : **"Message envoyé avec succès!"**
5. Vérifiez votre boîte mail **byfaag@gmail.com** (vérifiez aussi les spams)

---

## ✅ Résultat attendu

Après configuration :
- ✅ Les messages sont envoyés **automatiquement** à **byfaag@gmail.com**
- ✅ **Aucun client email ne s'ouvre** - tout est automatique
- ✅ Vous recevez un email pour chaque message avec :
  - Le nom de l'expéditeur
  - Son email
  - Son téléphone
  - Son message

---

## 🆘 Problèmes courants

### Je ne reçois pas les emails
1. **Vérifiez les spams** : Les emails peuvent être dans le dossier spam de byfaag@gmail.com
2. **Vérifiez l'endpoint** : Assurez-vous que l'endpoint dans `script.js` est correct
3. **Vérifiez Formspree** : Allez dans le dashboard Formspree → "Submissions" pour voir les messages reçus
4. **Vérifiez l'email** : Assurez-vous que byfaag@gmail.com est bien configuré dans Formspree Settings

### Erreur "Form not found"
- Vérifiez que l'endpoint est correct (copiez-collez depuis Formspree)
- Vérifiez que le formulaire est actif dans Formspree

### Limite atteinte
- Le plan gratuit permet **50 soumissions/mois**
- Si vous dépassez, passez à un plan payant ou attendez le mois suivant

---

## 📝 Note importante

**Sans configuration Formspree**, le formulaire affichera un message d'erreur et ouvrira le client email comme solution de secours.

**Avec Formspree configuré**, les messages sont envoyés directement et automatiquement à **byfaag@gmail.com** ! 🎉

---

**Besoin d'aide ?** Consultez la documentation Formspree : [help.formspree.io](https://help.formspree.io)

