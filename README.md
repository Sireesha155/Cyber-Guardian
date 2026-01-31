# 🚀 QUICK START GUIDE - CyberGuardian

## 📥 HOW TO USE THE PROJECT

### Option 1: Extract the ZIP File (Recommended)

1. **Download** the file: `cyberguardian_project.zip`

2. **Extract** it to your desired location:
   ```bash
   unzip cyberguardian_project.zip
   cd cyberguardian_project
   ```

3. **Install Requirements** (if not already installed):
   ```bash
   pip install django djangorestframework scikit-learn joblib numpy
   ```

4. **Run the Server**:
   ```bash
   python manage.py runserver
   ```

5. **Access the Application**:
   - API Endpoint: `http://127.0.0.1:8000/api/scan/`
   - Admin Panel: `http://127.0.0.1:8000/admin/`

---

## 🧪 TEST THE API

### Using cURL:
```bash
curl -X POST http://127.0.0.1:8000/api/scan/ \
  -H "Content-Type: application/json" \
  -d '{
    "failed_logins": 4,
    "login_attempts": 10,
    "odd_hour": true,
    "new_device": true
  }'
```

### Expected Response:
```json
{
  "status": "scan_completed",
  "analysis": {
    "risk_score": 85.0,
    "threat_detected": true,
    "model": "RandomForestClassifier",
    "confidence": "85.0%"
  }
}
```

---

## 🌐 WEB INTERFACE

### Open the Interactive Demo:

1. **Navigate to project folder**
2. **Open in browser**: `demo_website.html` or `index.html`
3. **Try the interface**:
   - Adjust sliders for login attempts
   - Check boxes for odd hours / new device
   - Click "Run Security Scan"
   - See real-time threat analysis!

---

## 🗂️ PROJECT STRUCTURE

```
cyberguardian_project/
├── db.sqlite3                  ✅ DATABASE (ALREADY CREATED!)
├── manage.py                   ✅ Django management
├── insider_model.pkl           ✅ ML Model (pre-trained)
├── cyberguardian/
│   ├── settings.py            ✅ Configuration
│   ├── urls.py                ✅ URL routing
│   └── wsgi.py                ✅ WSGI config
├── security/
│   ├── models.py              ✅ User Profile model
│   ├── views.py               ✅ API endpoint
│   ├── ml_engine.py           ✅ ML threat detection
│   └── admin.py               ✅ Admin interface
├── demo_website.html          🌐 Interactive web demo
├── index.html                 🌐 Alternative demo
└── DOCUMENTATION.md           📚 Full documentation
```

---

## 🔧 TROUBLESHOOTING

### Issue: "Module not found"
**Solution:**
```bash
pip install django djangorestframework scikit-learn joblib numpy
```

### Issue: "Port already in use"
**Solution:**
```bash
python manage.py runserver 8080
```

### Issue: "Database locked"
**Solution:**
```bash
# Delete and recreate
rm db.sqlite3
python manage.py migrate
```

---

## 🎯 WHAT'S INCLUDED IN THE PROJECT

✅ **Complete Django Application**
✅ **Pre-trained ML Model** (insider_model.pkl)
✅ **REST API Endpoint** (/api/scan/)
✅ **Admin Interface** (/admin/)
✅ **Interactive Web Demo** (demo_website.html)
✅ **Full Documentation** (DOCUMENTATION.md)

---

## 📊 FILE DESCRIPTIONS

| File | Purpose |
|------|---------|
| `db.sqlite3` | ✅ SQLite database (ready to use) |
| `manage.py` | Django command-line utility |
| `insider_model.pkl` | Trained Random Forest model |
| `demo_website.html` | Interactive threat detection UI |
| `index.html` | Alternative demo interface |
| `DOCUMENTATION.md` | Complete system documentation |
| `README.md` | Project overview |

---

## 🎓 NEXT STEPS

1. ✅ Extract the ZIP file
2. ✅ Install dependencies
3. ✅ Run `python manage.py runserver`
4. ✅ Test API with cURL or web demo
5. ✅ Create admin user (optional):
   ```bash
   python manage.py createsuperuser
   ```

---

## 💡 TIPS

- **Database is ready** - No need to run migrations again
- **ML Model is trained** - Just start using it
- **Web demos included** - Open HTML files in browser
- **API is RESTful** - Easy to integrate with any app

---

## 🆘 NEED HELP?

Check these files in order:
1. `QUICK_START_GUIDE.md` (this file)
2. `DOCUMENTATION.md` (detailed guide)
3. `README.md` (project overview)

---

## ✨ FEATURES AT A GLANCE

🧠 **ML-Powered** - Random Forest threat detection
⚡ **Real-time** - Instant risk analysis
🎨 **Beautiful UI** - Interactive web interface
🔒 **Secure** - Django built-in security
📊 **Visual** - Color-coded risk levels
📈 **Scalable** - Production-ready code

---


For detailed documentation, see: `DOCUMENTATION.md` readme file for this clearly
