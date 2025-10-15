const year=document.getElementById('year');year.textContent=new Date().getFullYear();
const menus={
  visitor:[{k:'home',t:'Início'},{k:'mission',t:'Missão, Visão e Valores'},{k:'history',t:'Histórico e Conquistas'},{k:'team',t:'Equipe e Estrutura'},{k:'transparency',t:'Relatórios de Transparência'}],
  projects:[{k:'list',t:'Projetos Sociais'},{k:'gallery',t:'Galeria de Mídia'},{k:'impact',t:'Indicadores e Resultados'},{k:'categories',t:'Categorias'}],
  volunteers:[{k:'portal',t:'Portal de Oportunidades'},{k:'apply',t:'Inscrição e Seleção'},{k:'area',t:'Área do Voluntário'},{k:'certificates',t:'Certificados Digitais'}],
  donations:[{k:'campaigns',t:'Campanhas de Arrecadação'},{k:'donate',t:'Doações On-line'},{k:'goals',t:'Metas e Progresso'},{k:'reports',t:'Prestação de Contas'}],
  communication:[{k:'blog',t:'Blog e Notícias'},{k:'newsletter',t:'Newsletter'},{k:'press',t:'Área de Imprensa'},{k:'documents',t:'Documentos Públicos'}]
};
const content=document.getElementById('content');
const menu=document.getElementById('menu');
let current='visitor';
function setRole(r){current=r;renderMenu();render('home');}
function renderMenu(){menu.innerHTML='';menus[current].forEach(m=>{const b=document.createElement('button');b.textContent=m.t;b.onclick=()=>render(m.k);menu.appendChild(b)})}
function render(view){content.innerHTML='';switch(view){
  case 'home':content.innerHTML=`<div class='card'><h1>Bem-vindo à Conecta Voluntário</h1><p>Somos uma organização dedicada ao impacto social.</p><img src='https://picsum.photos/1200/400?random=1' alt='banner institucional' style='width:100%;border-radius:8px;margin-top:8px;'/></div>`;break;
  case 'mission':content.innerHTML=`<div class='card'><h1>Missão, Visão e Valores</h1><p><strong>Missão:</strong> Promover conexões transformadoras entre pessoas e causas.</p><p><strong>Visão:</strong> Ser referência em voluntariado colaborativo.</p><p><strong>Valores:</strong> Ética, Empatia, Inclusão, Transparência.</p></div>`;break;
  case 'history':content.innerHTML=`<div class='card'><h1>Histórico e Conquistas</h1><p>Desde 2015, realizamos mais de 200 projetos sociais.</p><img src='https://picsum.photos/800/300?random=2' alt='histórico'/></div>`;break;
  case 'team':content.innerHTML=`<div class='card'><h1>Equipe e Estrutura</h1><div class='gallery'>${[1,2,3,4].map(i=>`<img src='https://picsum.photos/200/200?random=${i+10}' alt='membro'>`).join('')}</div></div>`;break;
  case 'transparency':content.innerHTML=`<div class='card'><h1>Relatórios de Transparência</h1><a href='#' class='btn link'>Baixar Relatório 2025 (PDF)</a></div>`;break;
  case 'list':content.innerHTML=`<div class='card'><h1>Projetos Sociais</h1><p>Listagem detalhada.</p></div>`;break;
  case 'gallery':content.innerHTML=`<div class='card'><h1>Galeria de Fotos</h1><div class='gallery'>${[1,2,3,4,5,6].map(i=>`<img src='https://picsum.photos/300/200?random=${i+20}' alt='projeto'>`).join('')}</div></div>`;break;
  case 'impact':content.innerHTML=`<div class='card'><h1>Indicadores de Impacto</h1><p>Projetos ativos: 24 | Voluntários: 150 | Recursos: R$320.000</p></div>`;break;
  case 'portal':content.innerHTML=`<div class='card'><h1>Portal de Oportunidades</h1><img src='https://picsum.photos/800/300?random=30' alt='voluntariado'/></div>`;break;
  default:content.innerHTML='<div class="card"><h1>Conteúdo em construção...</h1></div>';
}}
document.getElementById('applyBtn').onclick=()=>{setRole(document.getElementById('roleSelect').value)};
setRole('visitor');
