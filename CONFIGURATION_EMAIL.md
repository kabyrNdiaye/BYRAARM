# 📧 Configuration Email - byfaag@gmail.com

## ⚠️ IMPORTANT : Pour recevoir les emails

Le formulaire de contact doit être configuré pour envoyer les emails à **byfaag@gmail.com**.

## 🚀 Solution RAPIDE : Formspree (5 minutes)

### Étape 1 : Créer un compte Formspree
1. Allez sur **[formspree.io](https://formspree.io)**
2. Cliquez sur **"Get Started"** ou **"Sign Up"**
3. Créez un compte gratuit (avec Google, GitHub, ou email)

### Étape 2 : Créer un formulaire
1. Dans le dashboard, cliquez sur **"New Form"**
2. Nommez-le : **"BYFAARM Contact"**
3. **Copiez l'endpoint** qui apparaît (ex: `https://formspree.io/f/xjvqkzpn`)

### Étape 3 : Configurer les notifications
1. Cliquez sur votre formulaire
2. Allez dans **"Settings"** → **"Email Notifications"**
3. Ajoutez **byfaag@gmail.com** comme email de destination
4. Sauvegardez

### Étape 4 : Mettre à jour le code
1. Ouvrez le fichier **`script.js`**
2. Trouvez la ligne ~179 :
   ```javascript
   const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT';
   ```
3. Remplacez par votre endpoint :
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/VOTRE_ENDPOINT_ICI';
   ```
   **Exemple** :
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/xjvqkzpn';
   ```

### Étape 5 : Tester
1. Ouvrez votre site
2. Remplissez le formulaire de contact
3. Envoyez un message
4. Vérifiez votre boîte mail **byfaag@gmail.com**

---

## ✅ Vérification

Après configuration, vous devriez recevoir :
- ✅ Un email à **byfaag@gmail.com** pour chaque message
- ✅ Les informations : nom, email, téléphone, message
- ✅ Un sujet : "Nouveau message depuis BYFAARM - [Nom]"

---

## 🆘 Problèmes courants

### Je ne reçois pas les emails
1. **Vérifiez les spams** : Les emails peuvent être dans le dossier spam
2. **Vérifiez l'endpoint** : Assurez-vous que l'endpoint dans le code est correct
3. **Vérifiez Formspree** : Allez dans le dashboard Formspree pour voir les soumissions
4. **Vérifiez l'email** : Assurez-vous que byfaag@gmail.com est bien configuré dans Formspree

### Erreur "Form not found"
- Vérifiez que l'endpoint est correct
- Vérifiez que le formulaire est actif dans Formspree

### Limite atteinte
- Le plan gratuit permet **50 soumissions/mois**
- Si vous dépassez, passez à un plan payant ou attendez le mois suivant

---

## 📝 Alternative : EmailJS

Si vous préférez EmailJS, suivez le guide `EMAILJS_SETUP.md` qui est déjà configuré pour byfag@gmail.com.

---

**Une fois configuré, tous les messages iront directement à byfaag@gmail.com ! 📬**

**Voir le guide détaillé : `CONFIGURATION_FORMSPREE.md`**

