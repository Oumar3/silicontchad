# Déploiement Silicon Tchad (VPS)

## 1. Prérequis
- VPS Ubuntu 22.04+
- Node.js 18+
- Nginx

## 2. Déploiement Backend
```bash
cd backend
npm install
npm run start
```

## 3. Déploiement Frontend
```bash
cd frontend
npm install
npm run build
# Les fichiers sont dans frontend/dist
```

## 4. Nginx
- Copier le fichier nginx.conf dans /etc/nginx/sites-available/silicontchad
- Lier avec :
```bash
sudo ln -s /etc/nginx/sites-available/silicontchad /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Sécurité
- Utiliser HTTPS (Let's Encrypt)
- Mettre à jour régulièrement
- Désactiver les ports inutiles (UFW)
- Ne pas exposer le backend sur Internet (seulement via Nginx)

## 6. Bonnes pratiques
- Variables d’environnement (.env)
- Logs backend
- Limiter la taille des requêtes
- Sécuriser les headers Nginx
