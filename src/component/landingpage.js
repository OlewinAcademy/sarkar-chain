"use client";
import { useState, useEffect, useRef } from "react";


import {
  Shield, Link2, BarChart3, Eye, Zap, Globe, Lock, TrendingUp,
  ChevronDown, ArrowRight, CheckCircle2, Users, Building2,
  Layers, GitBranch, Activity, Award, Code2, Database,
  MapPin, Bell, FileText, Cpu, Menu, X, LayoutDashboard,
  Star, Phone, Mail, BookOpen,
  Wallet, AlertTriangle, RefreshCw, Sparkles,
  GitBranchIcon
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const C = {
  navy:   "#050d1f",
  navy2:  "#081428",
  navy3:  "#0d1f3a",
  gold:   "#d4a843",
  gold2:  "#f0c060",
  teal:   "#0fbcb0",
  cyan:   "#22d3ee",
  white:  "#008899",
  muted:  "#94aac8",
  card:   "rgba(13,31,58,0.85)",
  border: "rgba(212,168,67,0.18)",
  glow:   "rgba(212,168,67,0.12)",
};

const FONT_HEAD  = "'Cinzel', serif";
const FONT_BODY  = "'Outfit', sans-serif";
const FONT_MONO  = "'JetBrains Mono', monospace";

// ─── GLOBAL STYLE INJECTION ───────────────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      *{box-sizing:border-box;margin:0;padding:0;}
      html{scroll-behavior:smooth;}
      body{background:${C.navy};color:${C.white};font-family:${FONT_BODY};overflow-x:hidden;}
      ::-webkit-scrollbar{width:6px;}
      ::-webkit-scrollbar-track{background:${C.navy2};}
      ::-webkit-scrollbar-thumb{background:${C.gold};border-radius:3px;}
      ::selection{background:${C.gold};color:${C.navy};}
      .sc-btn-primary{
        background:linear-gradient(135deg,${C.gold},${C.gold2});
        color:${C.navy};font-weight:700;border:none;border-radius:8px;
        padding:12px 28px;font-family:${FONT_BODY};font-size:15px;
        cursor:pointer;transition:all .3s;letter-spacing:.4px;
        box-shadow:0 4px 24px rgba(212,168,67,.35);
      }
      .sc-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(212,168,67,.55);}
      .sc-btn-outline{
        background:transparent;color:${C.gold};
        border:1.5px solid ${C.gold};border-radius:8px;
        padding:11px 28px;font-family:${FONT_BODY};font-size:15px;
        cursor:pointer;transition:all .3s;
      }
      .sc-btn-outline:hover{background:${C.gold};color:${C.navy};transform:translateY(-2px);}
      .sc-card{
        background:${C.card};border:1px solid ${C.border};border-radius:16px;
        backdrop-filter:blur(18px);transition:all .35s;
      }
      .sc-card:hover{border-color:rgba(212,168,67,.5);box-shadow:0 12px 48px rgba(212,168,67,.15);transform:translateY(-4px);}
      .sc-gradient-text{
        background:linear-gradient(135deg,${C.gold},${C.gold2},${C.teal});
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      }
      .sc-section-label{
        font-family:${FONT_MONO};font-size:12px;letter-spacing:3px;
        color:${C.teal};text-transform:uppercase;font-weight:500;
      }
      .sc-heading{font-family:${FONT_HEAD};line-height:1.15;}
      .sc-pulse{animation:scPulse 3s ease-in-out infinite;}
      @keyframes scPulse{0%,100%{opacity:.5;transform:scale(1);}50%{opacity:1;transform:scale(1.05);}}
      .sc-float{animation:scFloat 5s ease-in-out infinite;}
      @keyframes scFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
      .sc-grid-bg{
        background-image:
          linear-gradient(rgba(212,168,67,.04) 1px,transparent 1px),
          linear-gradient(90deg,rgba(212,168,67,.04) 1px,transparent 1px);
        background-size:60px 60px;
      }
      .sc-nav-link{
        color:${C.muted};text-decoration:none;font-size:14px;font-weight:500;
        transition:color .2s;padding:6px 4px;
      }
      .sc-nav-link:hover{color:${C.gold};}
      .sc-stat-num{font-family:${FONT_HEAD};font-size:2.4rem;font-weight:900;}
      .sc-tag{
        display:inline-flex;align-items:center;gap:6px;
        background:rgba(212,168,67,.1);border:1px solid rgba(212,168,67,.25);
        border-radius:20px;padding:4px 14px;font-size:12px;color:${C.gold};
        font-family:${FONT_MONO};
      }
      .sc-step-line{
        position:absolute;left:50%;top:100%;width:2px;height:60px;
        background:linear-gradient(${C.gold},transparent);transform:translateX(-50%);
      }
      .mobile-menu{
        position:fixed;inset:0;background:${C.navy2};z-index:999;
        display:flex;flex-direction:column;padding:24px;
        transform:translateX(100%);transition:transform .35s ease;
      }
      .mobile-menu.open{transform:translateX(0);}
      @media(max-width:768px){
        .sc-hide-mobile{display:none!important;}
        .sc-show-mobile{display:flex!important;}
      }
      @media(min-width:769px){.sc-show-mobile{display:none!important;}}
      .tech-pill{
        background:rgba(15,188,176,.08);border:1px solid rgba(15,188,176,.2);
        border-radius:8px;padding:8px 16px;font-size:13px;color:${C.teal};
        font-family:${FONT_MONO};display:inline-block;transition:all .3s;
      }
      .tech-pill:hover{background:rgba(15,188,176,.18);transform:translateY(-2px);}
      .faq-item{border-bottom:1px solid ${C.border};padding:20px 0;cursor:pointer;}
      .faq-question{display:flex;justify-content:space-between;align-items:center;color:${C.white};font-weight:500;}
      .faq-answer{color:${C.muted};font-size:14px;line-height:1.7;padding-top:12px;}
      .timeline-dot{
        width:14px;height:14px;border-radius:50%;
        background:${C.gold};flex-shrink:0;margin-top:5px;
        box-shadow:0 0 12px rgba(212,168,67,.6);
      }
    `}</style>
  );
}

// ─── 1. NAVBAR ────────────────────────────────────────────────────────────────
function Navbar({ onDashboard }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Features","How It Works","Technology","Use Cases","FAQ"];
  return (
    <>
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:900,
        padding:"0 24px",
        background: scrolled ? "rgba(5,13,31,.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition:"all .4s",
      }}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:72}}>
          {/* Logo */}
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:36,height:36,borderRadius:8,background:`linear-gradient(135deg,${C.gold},${C.teal})`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <Link2 size={18} color={C.navy} strokeWidth={2.5}/>
            </div>
            <span style={{fontFamily:FONT_HEAD,fontSize:20,fontWeight:800,color:C.white,letterSpacing:1}}>
              Sarkar<span style={{color:C.gold}}>Chain</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="sc-hide-mobile" style={{display:"flex",gap:32}}>
            {links.map(l => (
              <a key={l} href={`#${l.replace(/\s+/g,"-").toLowerCase()}`} className="sc-nav-link">{l}</a>
            ))}
          </div>

          {/* CTA */}
          <div className="sc-hide-mobile" style={{display:"flex",gap:12,alignItems:"center"}}>
            <button className="sc-btn-outline" style={{padding:"9px 20px",fontSize:13}} onClick={onDashboard}>
              <LayoutDashboard size={14} style={{marginRight:6,verticalAlign:"middle"}}/>Dashboard
            </button>
            <button className="sc-btn-primary" style={{padding:"9px 20px",fontSize:13}}>
              Get Started <ArrowRight size={14} style={{marginLeft:6,verticalAlign:"middle"}}/>
            </button>
          </div>

          {/* Hamburger */}
          <button className="sc-show-mobile" style={{background:"none",border:"none",color:C.white,cursor:"pointer"}}
            onClick={() => setMenuOpen(true)}>
            <Menu size={24}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen?"open":""}`}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:40}}>
          <span style={{fontFamily:FONT_HEAD,fontSize:20,color:C.white}}>Sarkar<span style={{color:C.gold}}>Chain</span></span>
          <button onClick={()=>setMenuOpen(false)} style={{background:"none",border:"none",color:C.white,cursor:"pointer"}}><X size={24}/></button>
        </div>
        {links.map(l=>(
          <a key={l} href={`#${l.replace(/\s+/g,"-").toLowerCase()}`} onClick={()=>setMenuOpen(false)}
            style={{color:C.white,textDecoration:"none",fontSize:20,fontFamily:FONT_HEAD,padding:"16px 0",borderBottom:`1px solid ${C.border}`}}>
            {l}
          </a>
        ))}
        <div style={{marginTop:32,display:"flex",flexDirection:"column",gap:12}}>
          <button className="sc-btn-primary" style={{width:"100%"}} onClick={()=>{setMenuOpen(false);onDashboard();}}>
            <LayoutDashboard size={16} style={{marginRight:8,verticalAlign:"middle"}}/>Open Dashboard
          </button>
          <button className="sc-btn-outline" style={{width:"100%"}}>Get Started</button>
        </div>
      </div>
    </>
  );
}

// ─── 2. HERO ──────────────────────────────────────────────────────────────────
function Hero({ onDashboard }) {
  return (
    <section className="sc-grid-bg" style={{minHeight:"100vh",display:"flex",alignItems:"center",
      padding:"120px 24px 80px",position:"relative",overflow:"hidden"}}>
      {/* Blobs */}
      <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",
        background:`radial-gradient(circle,rgba(212,168,67,.12) 0%,transparent 70%)`,
        top:-200,right:-100,pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",
        background:`radial-gradient(circle,rgba(15,188,176,.08) 0%,transparent 70%)`,
        bottom:-150,left:-100,pointerEvents:"none"}}/>

      <div style={{maxWidth:1200,margin:"0 auto",width:"100%"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",flexWrap:"wrap"}}>
          {/* Left */}
          <div>
            <div className="sc-tag" style={{marginBottom:24}}>
              <Sparkles size={12}/> India's First Blockchain Gov-Fund Platform
            </div>
            <h1 className="sc-heading" style={{fontSize:"clamp(2.2rem,5vw,3.8rem)",fontWeight:900,marginBottom:24,lineHeight:1.1}}>
              Transparent Governance<br/>
              <span className="sc-gradient-text">Powered by Blockchain</span>
            </h1>
            <p style={{color:C.muted,fontSize:"clamp(15px,2vw,17px)",lineHeight:1.8,marginBottom:36,maxWidth:540}}>
              SarkarChain is an AI-driven blockchain platform that brings complete transparency, security,
              and real-time accountability to government fund allocation and tracking across India.
            </p>
            <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
              <button className="sc-btn-primary" onClick={onDashboard}>
                <LayoutDashboard size={16} style={{marginRight:8,verticalAlign:"middle"}}/>
                View Dashboard
              </button>
              <button className="sc-btn-outline">
                <BookOpen size={16} style={{marginRight:8,verticalAlign:"middle"}}/>
                Read Whitepaper
              </button>
            </div>
            <div style={{display:"flex",gap:32,marginTop:48,flexWrap:"wrap"}}>
              {[["₹2.4T","Funds Tracked"],["99.97%","Uptime"],["1200+","Departments"]].map(([n,l])=>(
                <div key={l}>
                  <div className="sc-stat-num" style={{color:C.gold,fontSize:"1.9rem"}}>{n}</div>
                  <div style={{color:C.muted,fontSize:13,marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – animated block visual */}
          <div className="sc-hide-mobile" style={{display:"flex",justifyContent:"center"}}>
            <div className="sc-float" style={{position:"relative",width:380,height:380}}>
              {/* Central hex */}
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:160,height:160,borderRadius:"50%",
                  background:`linear-gradient(135deg,${C.navy3},${C.gold}22)`,
                  border:`2px solid ${C.gold}`,display:"flex",flexDirection:"column",
                  alignItems:"center",justifyContent:"center",boxShadow:`0 0 60px rgba(212,168,67,.3)`}}>
                  <Link2 size={40} color={C.gold}/>
                  <span style={{color:C.gold,fontFamily:FONT_HEAD,fontSize:11,marginTop:8,letterSpacing:2}}>Sarkar</span>
                </div>
              </div>
              {/* Orbit nodes */}
              {[
                {icon:<Shield size={20}/>, label:"Security",angle:0},
                {icon:<BarChart3 size={20}/>, label:"Analytics",angle:72},
                {icon:<Eye size={20}/>, label:"Audit",angle:144},
                {icon:<Zap size={20}/>, label:"Smart",angle:216},
                {icon:<Globe size={20}/>, label:"GIS",angle:288},
              ].map(({icon,label,angle})=>{
                const r = 160;
                const rad = (angle-90)*Math.PI/180;
                const x = 190+r*Math.cos(rad)-36;
                const y = 190+r*Math.sin(rad)-36;
                return (
                  <div key={label} style={{position:"absolute",left:x,top:y,
                    width:72,height:72,borderRadius:12,background:C.card,
                    border:`1px solid ${C.border}`,display:"flex",flexDirection:"column",
                    alignItems:"center",justifyContent:"center",gap:4,backdropFilter:"blur(12px)"}}>
                    <span style={{color:C.gold}}>{icon}</span>
                    <span style={{fontSize:10,color:C.muted,fontFamily:FONT_MONO}}>{label}</span>
                  </div>
                );
              })}
              {/* Orbit ring */}
              <div style={{position:"absolute",inset:30,borderRadius:"50%",
                border:`1px dashed rgba(212,168,67,.2)`,animation:"spin 30s linear infinite"}}/>
              <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. STATS BANNER ─────────────────────────────────────────────────────────
function StatsBanner() {
  const stats = [
    {n:"₹2.4T+",l:"Total Funds Tracked",icon:<Wallet size={22}/>},
    {n:"12,500+",l:"Transactions/Day",icon:<Activity size={22}/>},
    {n:"99.97%",l:"System Uptime",icon:<Shield size={22}/>},
    {n:"340+",l:"Government Depts",icon:<Building2 size={22}/>},
    {n:"0",l:"Fraud Incidents",icon:<AlertTriangle size={22}/>},
    {n:"28",l:"States Covered",icon:<MapPin size={22}/>},
  ];
  return (
    <section style={{padding:"60px 24px",background:`linear-gradient(90deg,${C.navy2},${C.navy3},${C.navy2})`,
      borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:32}}>
          {stats.map(({n,l,icon})=>(
            <div key={l} style={{textAlign:"center"}}>
              <div style={{color:C.gold,marginBottom:8,display:"flex",justifyContent:"center"}}>{icon}</div>
              <div className="sc-stat-num" style={{color:C.white,fontSize:"2rem"}}>{n}</div>
              <div style={{color:C.muted,fontSize:12,marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. FEATURES ─────────────────────────────────────────────────────────────
function Features() {
  const feats = [
    {icon:<Shield size={28}/>,title:"Blockchain Security",desc:"Every rupee logged on an immutable distributed ledger. Tamper-proof by design, auditable by default."},
    {icon:<Cpu size={28}/>,title:"AI Fraud Detection",desc:"Isolation Forest ML models flag anomalous transactions in real-time before funds are misappropriated."},
    {icon:<MapPin size={28}/>,title:"GIS Fund Tracking",desc:"Geo-tagged transactions pinned to actual project locations. Verify progress on the map, not just on paper."},
    {icon:<FileText size={28}/>,title:"Smart Contracts",desc:"Multi-stage fund release: Approve → Progress → Complete. Penalty clauses auto-executed on delay."},
    {icon:<BarChart3 size={28}/>,title:"Predictive Analytics",desc:"ARIMA & LSTM models forecast budget needs, flag shortages, and project completion timelines months ahead."},
    {icon:<Bell size={28}/>,title:"Real-Time Alerts",desc:"Instant notifications for fund release, suspicious activity, and milestone delays sent across all channels."},
    {icon:<Globe size={28}/>,title:"Citizen Transparency",desc:"Public dashboard lets every citizen track how government money is spent in their constituency."},
    {icon:<Database size={28}/>,title:"Automated Auditing",desc:"CAG-ready audit reports auto-generated with compliance certificates and full transaction logs."},
    {icon:<Layers size={28}/>,title:"Hybrid Blockchain",desc:"Private chain for government operations + public layer for citizen transparency. Scalable & privacy-safe."},
  ];
  return (
    <section id="features" style={{padding:"100px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="sc-section-label" style={{marginBottom:16}}>Core Capabilities</div>
          <h2 className="sc-heading" style={{fontSize:"clamp(1.8rem,4vw,2.8rem)"}}>
            Everything Governance <span className="sc-gradient-text">Needs</span>
          </h2>
          <p style={{color:C.muted,maxWidth:520,margin:"16px auto 0",lineHeight:1.7}}>
            A complete suite of tools designed to eliminate corruption, enforce accountability,
            and deliver real-time transparency at every level.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
          {feats.map(({icon,title,desc})=>(
            <div key={title} className="sc-card" style={{padding:28}}>
              <div style={{width:56,height:56,borderRadius:12,background:`linear-gradient(135deg,rgba(212,168,67,.15),rgba(212,168,67,.05))`,
                border:`1px solid rgba(212,168,67,.2)`,display:"flex",alignItems:"center",justifyContent:"center",
                marginBottom:20,color:C.gold}}>
                {icon}
              </div>
              <h3 style={{fontFamily:FONT_HEAD,fontSize:17,marginBottom:10,color:C.white}}>{title}</h3>
              <p style={{color:C.muted,fontSize:14,lineHeight:1.7}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. HOW IT WORKS ─────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {n:"01",title:"Fund Allocation",desc:"Government ministry logs allocation on SarkarChain. Smart contract is auto-created with conditions.",icon:<Wallet size={24}/>},
    {n:"02",title:"Blockchain Recording",desc:"Every transaction is cryptographically hashed and stored across distributed nodes. Zero single point of failure.",icon:<Link2 size={24}/>},
    {n:"03",title:"Smart Execution",desc:"Funds release automatically when project milestones are verified. No human intervention needed.",icon:<Zap size={24}/>},
    {n:"04",title:"AI Monitoring",desc:"Every transaction is scored by our ML model. Anomalies trigger instant alerts and fund freezes.",icon:<Cpu size={24}/>},
    {n:"05",title:"GIS Verification",desc:"Field officers geo-tag progress. Citizens can view actual on-ground status via the public map.",icon:<MapPin size={24}/>},
    {n:"06",title:"Audit & Report",desc:"Monthly auto-generated audit reports sent to CAG. Full traceability from rupee to result.",icon:<FileText size={24}/>},
  ];
  return (
    <section id="how-it-works" style={{padding:"100px 24px",background:C.navy2}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="sc-section-label" style={{marginBottom:16}}>The Process</div>
          <h2 className="sc-heading" style={{fontSize:"clamp(1.8rem,4vw,2.8rem)"}}>
            How <span className="sc-gradient-text">SarkarChain</span> Works
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24}}>
          {steps.map(({n,title,desc,icon})=>(
            <div key={n} className="sc-card" style={{padding:28,position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-10,right:-10,fontFamily:FONT_HEAD,fontSize:80,
                color:"rgba(212,168,67,.06)",fontWeight:900,userSelect:"none"}}>{n}</div>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
                <div style={{width:44,height:44,borderRadius:10,background:`rgba(212,168,67,.12)`,
                  border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:C.gold}}>
                  {icon}
                </div>
                <span style={{fontFamily:FONT_MONO,color:C.gold,fontSize:13}}>{n}</span>
              </div>
              <h3 style={{fontFamily:FONT_HEAD,fontSize:17,marginBottom:10,color:C.white}}>{title}</h3>
              <p style={{color:C.muted,fontSize:14,lineHeight:1.7}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. TECHNOLOGY STACK ──────────────────────────────────────────────────────
function TechStack() {
  const tiers = [
    {label:"Frontend",techs:["React.js","Next.js","Leaflet.js","Chart.js","Bootstrap 5"]},
    {label:"Backend",techs:["Node.js","Express","Web3.js","Ethers.js","REST APIs"]},
    {label:"Blockchain",techs:["Ethereum","Solidity","Ganache","Hardhat","MetaMask"]},
    {label:"AI / ML",techs:["Python","scikit-learn","Isolation Forest","LSTM","Pandas"]},
    {label:"Database",techs:["MongoDB","PostgreSQL","IPFS","Redis","Firebase"]},
    {label:"DevOps",techs:["Docker","AWS GovCloud","CI/CD","Nginx","Kubernetes"]},
  ];
  return (
    <section id="technology" style={{padding:"100px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="sc-section-label" style={{marginBottom:16}}>Under the Hood</div>
          <h2 className="sc-heading" style={{fontSize:"clamp(1.8rem,4vw,2.8rem)"}}>
            Battle-Tested <span className="sc-gradient-text">Technology</span>
          </h2>
          <p style={{color:C.muted,maxWidth:480,margin:"16px auto 0",lineHeight:1.7}}>
            Built on proven open-source technologies and enterprise-grade infrastructure
            designed for government-scale deployments.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:24}}>
          {tiers.map(({label,techs})=>(
            <div key={label} className="sc-card" style={{padding:28}}>
              <div style={{color:C.teal,fontFamily:FONT_MONO,fontSize:12,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>{label}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {techs.map(t=>(
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. USE CASES ─────────────────────────────────────────────────────────────
function UseCases() {
  const cases = [
    {icon:<Building2 size={32}/>,title:"Municipal Corporations",desc:"Track road construction, drainage, and public works funds from sanction to completion with full geo-verification.",color:C.gold},
    {icon:<Users size={32}/>,title:"Welfare Schemes",desc:"Direct benefit transfers for MGNREGS, PM Awas Yojana, and Aadhaar-linked beneficiary schemes with zero leakage.",color:C.teal},
    {icon:<Globe size={32}/>,title:"Smart Cities Mission",desc:"Real-time fund utilization dashboards for the 100 Smart Cities programme, accessible to citizens and auditors.",color:"#a78bfa"},
    {icon:<Award size={32}/>,title:"Education Funds",desc:"Sarva Shiksha Abhiyan and mid-day meal scheme funds tracked at school level. Automated compliance reports.",color:"#fb923c"},
    {icon:<Activity size={32}/>,title:"Healthcare Projects",desc:"PMJAY and AYUSHMAN BHARAT fund flows monitored. Hospital fund usage linked to patient outcome data.",color:"#34d399"},
    {icon:<GitBranch size={32}/>,title:"Panchayati Raj",desc:"Gram panchayat-level fund management with multilingual dashboards for grassroots transparency.",color:"#f472b6"},
  ];
  return (
    <section id="use-cases" style={{padding:"100px 24px",background:C.navy2}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="sc-section-label" style={{marginBottom:16}}>Applications</div>
          <h2 className="sc-heading" style={{fontSize:"clamp(1.8rem,4vw,2.8rem)"}}>
            Built for Every Level of <span className="sc-gradient-text">Governance</span>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:24}}>
          {cases.map(({icon,title,desc,color})=>(
            <div key={title} className="sc-card" style={{padding:28,display:"flex",gap:20}}>
              <div style={{color,flexShrink:0,marginTop:4}}>{icon}</div>
              <div>
                <h3 style={{fontFamily:FONT_HEAD,fontSize:16,color:C.white,marginBottom:8}}>{title}</h3>
                <p style={{color:C.muted,fontSize:14,lineHeight:1.7}}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. FAQ ───────────────────────────────────────────────────────────────────
function FAQ() {
  const [open,setOpen]=useState(null);
  const faqs=[
    {q:"Is SarkarChain approved for government deployment?",a:"SarkarChain is built to comply with India's IT Act 2000, NIC security standards, and MeitY cloud guidelines. We are actively working with NICSI for national rollout approval."},
    {q:"Which blockchain does SarkarChain use?",a:"SarkarChain uses a permissioned Ethereum network (Hyperledger Besu variant) for the government layer, with a public Ethereum read-only transparency layer for citizens."},
    {q:"How does AI fraud detection work?",a:"Our Isolation Forest model is trained on historical transaction patterns. It scores every new transaction in under 50ms and raises alerts for outliers. False-positive rate is under 0.3%."},
    {q:"Can small municipalities afford SarkarChain?",a:"Yes. Our SaaS model starts at ₹15,000/month for tier-3 municipalities. The ROI from prevented fund leakage typically covers costs within 60 days."},
    {q:"Is citizen data secure?",a:"Citizens access only anonymized, aggregated public fund data. No personal data is stored on-chain. All data flows are encrypted with AES-256."},
  ];
  return (
    <section id="faq" style={{padding:"100px 24px"}}>
      <div style={{maxWidth:800,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:64}}>
          <div className="sc-section-label" style={{marginBottom:16}}>Common Questions</div>
          <h2 className="sc-heading" style={{fontSize:"clamp(1.8rem,4vw,2.8rem)"}}>
            Frequently <span className="sc-gradient-text">Asked</span>
          </h2>
        </div>
        {faqs.map(({q,a},i)=>(
          <div key={i} className="faq-item" onClick={()=>setOpen(open===i?null:i)}>
            <div className="faq-question">
              <span>{q}</span>
              <ChevronDown size={18} color={C.gold} style={{transform:open===i?"rotate(180deg)":"none",transition:"transform .3s"}}/>
            </div>
            {open===i && <div className="faq-answer">{a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 9. FOOTER ────────────────────────────────────────────────────────────────
function Footer({ onDashboard }) {
  const cols = [
    {title:"Platform",links:["Features","Dashboard","API Docs","Security","Changelog"]},
    {title:"Government",links:["State Depts","Municipal","Panchayati Raj","Smart Cities","Welfare"]},
    {title:"Company",links:["About Us","Careers","Press","Blog","Contact"]},
    {title:"Legal",links:["Privacy Policy","Terms of Service","Data Policy","Compliance","License"]},
  ];
  return (
    <footer style={{background:C.navy2,borderTop:`1px solid ${C.border}`,padding:"80px 24px 40px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        {/* CTA banner */}
        <div style={{background:`linear-gradient(135deg,${C.navy3},rgba(212,168,67,.08))`,
          border:`1px solid ${C.border}`,borderRadius:20,padding:"48px 40px",
          textAlign:"center",marginBottom:72}}>
          <h2 className="sc-heading" style={{fontSize:"clamp(1.6rem,3.5vw,2.4rem)",marginBottom:16}}>
            Ready to Transform <span className="sc-gradient-text">Governance</span>?
          </h2>
          <p style={{color:C.muted,marginBottom:28,maxWidth:480,margin:"0 auto 28px"}}>
            Join 340+ government departments already using SarkarChain to eliminate corruption
            and build citizen trust.
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="sc-btn-primary" onClick={onDashboard}>
              <LayoutDashboard size={16} style={{marginRight:8,verticalAlign:"middle"}}/>Open Dashboard
            </button>
            <button className="sc-btn-outline">Request a Demo</button>
          </div>
        </div>

        {/* Links */}
        <div style={{display:"grid",gridTemplateColumns:"2fr repeat(4,1fr)",gap:40,marginBottom:60,flexWrap:"wrap"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
              <div style={{width:32,height:32,borderRadius:7,background:`linear-gradient(135deg,${C.gold},${C.teal})`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Link2 size={15} color={C.navy}/>
              </div>
              <span style={{fontFamily:FONT_HEAD,fontSize:17,color:C.white}}>Sarkar<span style={{color:C.gold}}>Chain</span></span>
            </div>
            <p style={{color:C.muted,fontSize:13,lineHeight:1.8,maxWidth:220}}>
              Building trust in every government transaction through blockchain transparency and AI intelligence.
            </p>
            <div style={{display:"flex",gap:12,marginTop:20}}>
              {[<X size={16}/>,<GitBranchIcon size={16}/>,<FaLinkedin size={16}/>].map((i,idx)=>(
                <div key={idx} style={{width:36,height:36,borderRadius:8,background:"rgba(255,255,255,.05)",
                  border:`1px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",
                  cursor:"pointer",color:C.muted,transition:"all .2s"}}>
                  {i}
                </div>
              ))}
            </div>
          </div>
          {cols.map(({title,links})=>(
            <div key={title}>
              <div style={{color:C.white,fontWeight:600,fontSize:14,marginBottom:16}}>{title}</div>
              {links.map(l=>(
                <div key={l} style={{color:C.muted,fontSize:13,marginBottom:10,cursor:"pointer",transition:"color .2s"}}
                  onMouseEnter={e=>e.target.style.color=C.gold}
                  onMouseLeave={e=>e.target.style.color=C.muted}>{l}</div>
              ))}
            </div>
          ))}
        </div>

        <div style={{borderTop:`1px solid ${C.border}`,paddingTop:32,display:"flex",
          justifyContent:"space-between",flexWrap:"wrap",gap:16,alignItems:"center"}}>
          <span style={{color:C.muted,fontSize:13}}>© 2026 SarkarChain . All rights reserved.</span>
          <div style={{display:"flex",gap:24}}>
            
    
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT LANDING PAGE ────────────────────────────────────────────────────────
export default function SarkarchainPage({ onDashboard }) {
  return (
    <>
      <GlobalStyles/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
      <Navbar onDashboard={onDashboard}/>
      <Hero onDashboard={onDashboard}/>
      <StatsBanner/>
      <Features/>
      <HowItWorks/>
      <TechStack/>
      <UseCases/>
      <FAQ/>
      <Footer onDashboard={onDashboard}/>
    </>
  );
}