/* ========== UTILITY ========== */
document.getElementById('year').textContent = new Date().getFullYear();

function downloadResume(){
  const url = './Resume_College.pdf';
  if(url === '#'){
    alert('The resume should have been submitted with the Job Application.');
    return;
  }
  window.open(url, '_blank');
}

/* ========== SIMPLE MODAL SYSTEM ========== */
const backdrop = document.getElementById('modalBackdrop');
const modal = document.getElementById('modalContent');

//   function openModal(modalId){
//     // You can expand to handle multiple modals; here it's a single quick-contact example
//     backdrop.style.display = 'flex';
//     backdrop.setAttribute('aria-hidden','false');
//     modal.classList.add('open');
//     modal.focus();
//     // basic content swap if contactModal
//     if(modalId === 'contactModal'){
//       document.getElementById('modalTitle').textContent = 'Quick Contact';
//       document.getElementById('modalSubtitle').textContent = 'Send a short message quickly';
//       document.getElementById('modalBody').innerHTML = `
//         <form id="quickContact" onsubmit="submitQuickContact(event)" novalidate>
//           <label for="qc-name">Name</label>
//           <input id="qc-name" required placeholder="Your name" style="margin-bottom:8px">
//           <label for="qc-email">Email</label>
//           <input id="qc-email" type="email" required placeholder="you@example.com" style="margin-bottom:8px">
//           <label for="qc-msg">Message</label>
//           <textarea id="qc-msg" required placeholder="Short message" style="margin-bottom:8px"></textarea>
//           <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:6px">
//             <button class="btn" type="submit">Send</button>
//             <button class="btn secondary" type="button" onclick="closeModal()">Cancel</button>
//           </div>
//         </form>
//       `;
//       document.getElementById('modalRepo').style.display = 'none';
//       return;
//     }
//   }

function closeModal(){
  backdrop.style.display = 'none';
  backdrop.setAttribute('aria-hidden','true');
  modal.classList.remove('open');
  document.getElementById('modalTitle').textContent = '';
  document.getElementById('modalSubtitle').textContent = '';
  document.getElementById('modalBody').innerHTML = '';
  document.getElementById('modalRepo').style.display = '';
}

backdrop.addEventListener('click', function(e){
  if(e.target === backdrop) closeModal();
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeModal();
});

/* ========== PROJECT MODAL POPULATOR ========== */
const projectData = {
  0:{
    title: 'CBDIF Framework',
    subtitle: 'Citizen-based Digital Identity Framework for Authentication & Bot Reduction',
    body: `<p>Conducted literature review of existing digital identity frameworks and proposed a citizen-based approach for authentication and bot reduction. 
    Working on experimental implementation in a homelab environment to collect data and analyze patterns.</p>
    <ul>
      <li>Researching a digital identity system focused on reducing bot accounts and streamlining authentication procedures.</li>
      <li>Proposing a standardized interface for identity providers and service providers with sector-based access policies.</li>
    </ul>`,
    repo: '#'
  },
  1:{
    title: 'MTA Subway Hub',
    subtitle: 'Full stack web application for ease of subway navigation',
    body: `<p>Built a full-stack application integrating real-time MTA API with interactive NYC map showcasing transit data. 
    Currently expanding to include MTA buses, LIRR, among other transit routes.</p>
    <ul>
      <li>Stack: React, Express/Node, SQLite</li>
      <li>Designed a backend with redis-like caching, GTFS parsing, and sql queries to support live route and stop updates.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/NYC-Transit_Hub'
  },
  2:{
    title: 'Lifetime Financial Planner',
    subtitle: 'Light scanner for common misconfigurations & XSS detection',
    body: `<p>Built to learn about web vulns and automating checks. This is an educational tool — designed for lab use only.</p>
    <ul>
      <li>Stack: React, Express/Node, MongoDB, Jest/Cypress</li>
      <li>Planner that allows users to model the outcomes of investments, assets, and events like mortgage and family death.</li>
      <li>Allows users to visualize the effects of life events, upload custom tax data, or customize and replay shared scenarios.</li>
      <li>Conducted thorough unit testing and end to end user testing via Jest & Cypress, alongside security features like rate-limiting or preventing cross-site scripting.</li>
    </ul>`,
    repo: '#'
  },
  3: {
    title: 'Food Insecurity Web Application',
    subtitle: 'Sample project for mimicking a food insecurity resource platform',
    body: `<p>Web Application that aggregates resources for food insecurity.</p>
    <ul>
      <li>Stack: Express/Node, React</li>
      <li>List of food pantries with active resource tracking to help plan for food insecurity.</li>
      <li>Recipes platform to help individuals share recipes, including an aggregator on feed insecurity related news.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/FoodInsecurityReact'
  },
  4:{
    title: 'QA Platform',
    subtitle: 'Question & Answer platform inspired from Stack Overflow',
    body: `<p>MVC Architecture, Secure User Authentication, Various User Roles.</p>
    <ul>
      <li>Stack: React, Express/Node, MongoDB</li>
      <li>Hands-on practice with MERN stack and full stack software development.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/QA_Platform'
  },
  5: {
    title: "Technical Communication Portfolio",
    subtitle: "Showcase of technical communication samples",
    body: `<p>A folder of various research examining food insecurity, environmental impact of data centers, online tutoring solutions, and drafting software products.</p>`,
    repo: 'https://drive.google.com/drive/u/0/folders/1BLtGYlSJ8yD4QDF1Eq6KP7XnMx7ZXOOF'
  },
  6: {
    title: 'Cybersecurity Learning Tools',
    subtitle: 'Set of simple cybersecurity tools for learning purposes',
    body: `<p>Collection of simple cybersecurity tools including a password vault, network packet sniffer, and service fingerprinting tool.</p>
    <ul>
      <li>Stack: Python, Scapy, Pycryptodome, Socket, Flask</li>
      <li>Implemented high level overview of useful security tools for offensive security course.</li>
      <li>Password vault built with Python that dynamically generates the encryption/decryption keys through the user master password.</li>
      <li>Network packet sniffer built with Python and Scapy to parse packets and categorize various protocols such as HTTP, TLS, or DNS.</li>
      <li>TCP Fingerprinter built with Python and Socket to identify types of syn/ack packets including tcp, tls, http, https, and generic packets.</li>
      <li>Sample malware in python that attempts to read contents of all discoverable files into memory including .ssh, .config, .aws, .gcloud, .azure, and .*history.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/Coursework/tree/main/Python/Network_Security'
  },
  7: {
    title: 'Enigma Machine Simulator',
    subtitle: 'Mimics the encryption/decryption process of the WWII Enigma Machine via the command line',
    body: `<p>Command line interface that mimics the encryption/decryption process of the WWII Enigma Machine.</p>
    <ul>
      <li>Stack: C (stdlib, string, stdio).</li>
      <li>Implemented rotors, reflector, plugboard, and stepping mechanism to simulate the Enigma Machine.</li>
      <li>Allows users to configure rotor settings, reflector types, and plugboard connections for encryption/decryption.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/Coursework/tree/main/C/Enigma_Machine'
  },
  8: {
    title: 'Deet Debugger',
    subtitle: 'Simplified debugger program called deet',
    body: `<p>Debugger program called deet which is capable of managing and performing some basic debugging operations on a collection of target processes.</p>
    <ul>
      <li>Stack: C (stdlib, string, stdio, sys/ptrace, sys/wait, sys/user, sys/reg.h, unistd, errno).</li>
      <li>Providers the user with command-line interface that permits "target" processes to be started, stopped, examined, modified, and killed.</li>
      <li>Manage multiple processes at once, maintains information about active processes and their debug state, and controls IO operations of several processes using dup.</li>
      <li>Allows users to set breakpoints at specific memory addresses, continue execution until breakpoints are hit, and inspect/modify CPU registers of the target process.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/Coursework/blob/main/C/Deet_Debugger'
  },
  9: {
    title: 'Dynamic Memory Allocator',
    subtitle: 'Dynamic memory allocator implemented in C',
    body: `<p>Dynamic memory allocator implemented in C.</p>
    <ul>
      <li>Stack: C, Criterion Unit Testing, Valgrind.</li>
      <li>Implemented a custom memory allocator that manages heap memory allocation and deallocation.</li>
      <li>Handles allocation requests for various sizes of memory blocks and maintains a free list of available blocks.</li>
      <li>Unit testing via Criterion to ensure thorough functionality.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/Coursework/tree/main/C/Dynamic%20Memory_Allocator'
  },
  10: {
    title: 'Matrix Operations',
    subtitle: 'Matrix operations implemented in C',
    body: `<p>Matrix operations implemented in C.</p>
    <ul>
      <li>Stack: C (stdlib, string, stdio).</li>
      <li>Implemented matrix addition, subtraction, multiplication, and transpose operations via Binary Search Tree.</li>
      <li>Handles matrices of various sizes and provides error checking for invalid inputs.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/Coursework/tree/main/C/Matrix_Operations'
  },
  11: {
    title: 'File Search/Replace Utility',
    subtitle: 'File search and replace utility implemented in C',
    body: `<p>File search and replace utility implemented in C.</p>
    <ul>
      <li>Stack: C (stdlib, string, stdio), getopt</li>
      <li>Implemented a command-line utility that searches for a pattern in a file and replaces it with another pattern</li>
      <li>Command line parsing & validation using getopt including detecting missing, duplicate, or invalid arguments/usage.</li>
    </ul>`,
    repo: 'https://github.com/shabudeen03/Coursework/tree/main/C/Simple_GREP'
  },
  12: {
    title: 'US Naval Labtainers',
    subtitle: 'Hands-on labs on exploits and implementing security mechanisms/defenses',
    body: `Containerized environment for hands-on labs on exploits (buffer overflows, format string) and defenses (Linux access controls, database security).
    <ul>
      <li>Set up and configured containerized lab environment using provided Virtual Machine to simulate real-world scenarios for practicing cybersecurity concepts.</li>
      <li>Performed network forensics, reverse engineered binaries, and reproduced attacks (Rockwell Automation PLC).</li>
    </ul>`,
    repo: '#'
  },
  13: {
    title: 'Web Application Security Testing',
    subtitle: 'Analyzed and tested a mock twitter clone web application to probe for and fix various security vulnerabilities',
    body: `Course project for Web Security course where we analyzed and tested a mock twitter clone web application to probe for and fix various security vulnerabilities including insecure password storage, XSS, CSRF, SQL Injection, and authentication/authorization flaws.`,
    repo: '#'
  }
};

function openProjectModal(id){
  const p = projectData[id];
  if(!p) return;
  backdrop.style.display = 'flex';
  backdrop.setAttribute('aria-hidden','false');
  modal.classList.add('open');
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalSubtitle').textContent = p.subtitle;
  document.getElementById('modalBody').innerHTML = p.body;
  const repoBtn = document.getElementById('modalRepo');
  if(p.repo && p.repo !== '#'){
    repoBtn.href = p.repo; repoBtn.style.display = ''; repoBtn.textContent = 'Link to Resource';
  } else {
    repoBtn.style.display = 'none';
  }
}

document.querySelectorAll('nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

document.addEventListener('focus', function(e){
  if(backdrop.style.display === 'flex' && !modal.contains(e.target)){
    e.stopPropagation(); modal.focus();
  }
}, true);
