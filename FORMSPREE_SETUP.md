# 📧 Configuration Formspree (Solution Alternative Plus Simple)

Formspree est une alternative plus simple qu'EmailJS. Il suffit de créer un compte et d'obtenir un endpoint.

## 🚀 Configuration en 3 étapes

### Étape 1 : Créer un compte Formspree

1. **Allez sur [formspree.io](https://formspree.io)**
2. **Cliquez sur "Sign Up"** (Inscription gratuite)
3. **Créez votre compte** (avec Google, GitHub, ou email)

### Étape 2 : Créer un nouveau formulaire

1. **Dans le dashboard**, cliquez sur **"New Form"**
2. **Nommez votre formulaire** (ex: "BYFAARM Contact")
3. **Copiez l'endpoint** qui vous est donné (ex: `https://formspree.io/f/xxxxxxxxxx`)
4. **Dans "Email Notifications"**, ajoutez **byfag@gmail.com**

### Étape 3 : Mettre à jour le code

1. **Ouvrez `script.js`**
2. **Trouvez la fonction `sendViaFormspree`**
3. **Remplacez `YOUR_FORMSPREE_ENDPOINT`** par votre endpoint

**Exemple** :
```javascript
const formspreeEndpoint = 'https://formspree.io/f/abc123xyz';
```

---

## ✅ Avantages de Formspree

- ✅ **Plus simple** : Pas besoin de configurer des services email
- ✅ **Gratuit** : 50 soumissions/mois (plan gratuit)
- ✅ **Spam protection** : Protection anti-spam intégrée
- ✅ **Notifications** : Emails automatiques à byfag@gmail.com

---

## 🔄 Pour activer Formspree

Remplacez dans `script.js` la méthode d'envoi par Formspree au lieu de mailto.

