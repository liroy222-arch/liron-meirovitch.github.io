:root{
    --bg:#f8fafc;
    --surface:#ffffff;
    --text:#1e293b;
    --accent:#0F6CBD;
    --teal:#00796B;
}

.dark{
    --bg:#0f172a;
    --surface:#1e293b;
    --text:#f8fafc;
}

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body{
    font-family:Inter,Segoe UI,sans-serif;
    background:var(--bg);
    color:var(--text);
    line-height:1.6;
}

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 40px;
    background:var(--surface);
    position:sticky;
    top:0;
}

.nav-links a{
    margin-left:15px;
    text-decoration:none;
    color:var(--text);
}

.hero{
    text-align:center;
    padding:100px 20px;
}

.hero h1{
    font-size:3rem;
    color:var(--accent);
}

.hero h2{
    margin:15px 0;
}

.hero-buttons{
    margin-top:25px;
}

.btn,.btn-secondary{
    text-decoration:none;
    padding:12px 22px;
    border-radius:8px;
    margin:5px;
}

.btn{
    background:var(--accent);
    color:white;
}

.btn-secondary{
    background:var(--teal);
    color:white;
}

.snapshot{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:20px;
    max-width:1200px;
    margin:auto;
    padding:40px;
}

.card,
.tech-card,
.cert-card,
.timeline-item{
    background:var(--surface);
    padding:20px;
    border-radius:12px;
    box-shadow:0 5px 10px rgba(0,0,0,.08);
}

section{
    max-width:1200px;
    margin:auto;
    padding:50px 20px;
}

section h2{
    color:var(--accent);
    margin-bottom:20px;
}

.tech-grid,
.cert-grid{
    display:grid;
    gap:16px;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
}

#searchInput{
    width:100%;
    padding:15px;
    margin-bottom:25px;
    border-radius:8px;
    border:1px solid #ccc;
}

footer{
    text-align:center;
    padding:30px;
}
