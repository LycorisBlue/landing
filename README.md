# 🐘 BioGuard-CI | Suite IA pour la biodiversité ivoirienne

<div align="center">

![BioGuard-CI Logo](public/favicon.svg)

**L'Intelligence Artificielle au service de la protection de la biodiversité en Côte d'Ivoire**

[![Licence MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC.svg)](https://tailwindcss.com/)

</div>

---

## 🌟 À propos du projet

**BioGuard-CI** est une suite innovante d'outils d'intelligence artificielle développée pour lutter contre la crise de biodiversité en Côte d'Ivoire. Ce projet open-source combine surveillance satellitaire, détection acoustique anti-braconnage et éducation interactive.

### 🎯 Problème résolu
- **81%** de couverture forestière perdue depuis 1960
- **76%** de déclin des éléphants de forêt en 30 ans
- **2,1M hectares** d'aires protégées sous-surveillées

### 🚀 Notre solution : 3 modules IA interconnectés

| Module | Description | Statut | Technologies |
|--------|-------------|--------|--------------|
| 🛰️ **Détect'Forêt** | Surveillance satellitaire de la déforestation | 🟡 Concept validé | Sentinel-2, CNN, NDVI |
| 🔊 **EcoSentinel** | Anti-braconnage acoustique IoT | 🟡 Prototype | Raspberry Pi, YAMNet, LoRaWAN |
| 📱 **BioGuard Junior** | App éducative reconnaissance espèces | 🟡 Design phase | MobileNet, React Native |

---

## 🛠️ Stack technique

### Frontend
- **Framework** : React 18.3.1 + TypeScript
- **Build** : Vite 5.4.1
- **Styling** : Tailwind CSS 3.4.11 + shadcn/ui
- **Fonts** : Montserrat (titres) + Inter (texte)
- **Icons** : Lucide React
- **Charts** : Recharts

### Backend (prévu)
- **API** : Node.js + Express/Fastify
- **Database** : PostgreSQL + PostGIS (données géospatiales)
- **IA/ML** : Python + TensorFlow/PyTorch
- **IoT** : MQTT + InfluxDB (données capteurs)

### DevOps & Déploiement
- **Hosting** : Vercel/Netlify (frontend)
- **CI/CD** : GitHub Actions
- **Monitoring** : Sentry (errors) + Analytics

---

## 🚀 Installation & Développement

### Prérequis
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 ou **yarn** >= 1.22.0
- **Git**

### Installation rapide

```bash
# 1. Cloner le repository
git clone https://github.com/LycorisBlue/landing
cd bioguard-ci

# 2. Installer les dépendances
npm install
# ou
yarn install

# 3. Lancer le serveur de développement
npm run dev
# ou
yarn dev

# 4. Ouvrir http://localhost:8080