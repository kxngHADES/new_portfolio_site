lucide.createIcons();

const body = document.body;
const brandLogo = document.querySelector('.brand-logo');

// Mobile Menu Logic
const mobileMenu = document.getElementById('mobileMenu');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    // Prevent scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

const triggerThreshold = 50; 

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > triggerThreshold) {
        if (!body.classList.contains('scrolled')) {
            body.classList.add('scrolled');
        }
    } else {
        if (body.classList.contains('scrolled')) {
            body.classList.remove('scrolled');
        }
    }
});

// Parallax & Opacity handling
window.addEventListener('scroll', () => {
    if (!body.classList.contains('scrolled')) {
        const scroll = window.scrollY;
        brandLogo.style.opacity = 1 - (scroll / 400); // Slower fade for impact
        brandLogo.style.transform = `translate(-50%, -50%) scale(${1 - scroll/1200})`;
    } else {
        brandLogo.style.opacity = '';
        brandLogo.style.transform = '';
    }
});


/* =========================================================================
   INTERACTIVE D3 PHYSICS GRAPH (Neo4j Style Stack)
   ========================================================================= */
  // ==========================================
// DYNAMIC PROJECTS DATA
// ==========================================
const projectsData = [
	{
			title: "Tower of Hanoi",
			icon: "between-horizontal-end",
			description: "A game I made to play when learning recursion during data structures and algorithms in python module",
			stack: ["TypeScript", "CSS", "JavaScript", "HTML"],
			github: "https://github.com/kxngHADES/tower_of_hanoi",
			live: "https://tower-of-hanoi.ndaedzo.com/"
		},
    {
        title: "Bugs Network",
        icon: "server",
        description: "Cisco Packet Tracer simulation of a multi-floor office network. Includes VLAN/subnet design, RIP/OSPF routing, and DMZ configurations.",
        stack: ["Cisco PT", "OSPF/RIP", "Subnetting", "Linux"],
        github: "https://github.com/Ndaedzo1/Bugs-Network",
        live: ""
    },
    {
        title: "TripBuddy",
        icon: "map",
        description: "Social media travel application combining hotel booking features with Instagram-like photo sharing. Built natively in Android Studio.",
        stack: ["Java", "Firebase", "Android Studio", "UX Design"],
        github: "https://github.com/Ndaedzo1/TripBuddy",
        live: ""
    },
    {
        title: "BuyAlot",
        icon: "shopping-bag",
        description: "C2C e-commerce Xamarin mobile application allowing users to list products for peer-to-peer selling on the platform.",
        stack: ["C#", "SQLite3", "Xamarin", "Mobile UI"],
        github: "https://github.com/kxngHADES/BuyAlot",
		},
		{
			title: "FoodHarbor",
			icon: "chef-hat",
			description: "A Web app for people to share and rate each others recipes",
			stack: ["C#", "SSMS", "ASP.NET", "CSS", "HTML", "Bootstrap"],
			github: "https://github.com/kxngHADES/FoodHarbor",
			live: ""
	},
		{
			title: "Password Manager",
			icon: "key-round",
			description: "A simple tool to store, retrieve and generate passowrd, It encrypts all passwords via cryptography and stores then in a JSON where they can be retrieved and decrypted for you PS dont lose your key",
			stack: ['Python', 'tkinter'],
			github: "https://github.com/kxngHADES/Password-Manager",
			live: ""
	},
];

// ==========================================
// NEO4J STYLE GRAPH DATA
// ==========================================
const stackData = {
    nodes: [
        // Core Hub
        { id: "Core", group: 0, radius: 50, context: "My foundational software engineering principles.", category: "Core" },
        
        // Category Hubs
        { id: "Languages", group: 1, radius: 25, context: "Core programming languages I write in daily.", category: "Category Hub" },
        { id: "Frontend", group: 2, radius: 25, context: "UI/UX frameworks and client-side rendering technologies.", category: "Category Hub" },
        { id: "Backend", group: 3, radius: 25, context: "Server-side logic, APIs, and database management.", category: "Category Hub" },
        { id: "DevOps", group: 4, radius: 25, context: "Deployment, CI/CD pipelines, and cloud infrastructure.", category: "Category Hub" },
        { id: "Networking", group: 5, radius: 25, context: "Enterprise network design, routing, and sysadmin.", category: "Category Hub" },

        // Languages (Group 1)
        { id: "Javascript", group: 1, radius: 8, context: "Extensive experience building full-stack web applications and dynamic UIs.", category: "Languages" },
        { id: "Typescript", group: 1, radius: 15, context: "Used for type-safe, scalable web applications to prevent runtime errors.", category: "Languages" },
        { id: "Python", group: 1, radius: 30, context: "Leveraged for deep learning models at Cars4Mars and backend scripting and API development.", category: "Languages" },
        { id: "Java", group: 1, radius: 8, context: "Object-oriented software design and enterprise application development. Used in developing TripBuddy", category: "Languages" },
        { id: "C#", group: 1, radius: 17, context: "Game development and strict ASP.NET backend application structures.", category: "Languages" },
				{ id: "SQL", group: 1, radius: 20, context: "Relational database querying, joins, and data normalization.", category: "Languages" },
				{ id: "PHP", group: 1, radius: 15, context: "Server side dev Used in my ReTrade C2C platform", category: "Languages" },

        // Frontend (Group 2)
        { id: "React", group: 2, radius: 10, context: "Component-based UI development and state management for web apps.", category: "Frontend" },
        { id: "Next.js", group: 2, radius: 20, context: "Server-side rendering (SSR) and static site generation for SEO optimization. Used to build Plantify's frontend", category: "Frontend" },
        { id: "React Native", group: 2, radius: 15, context: "Cross-platform mobile application development at ASG Studios.", category: "Frontend" },
        { id: "Tailwind CSS", group: 2, radius: 15, context: "Utility-first CSS for rapid, responsive layout creation.", category: "Frontend" },

        // Backend (Group 3)
        { id: "Node.js", group: 3, radius: 15, context: "Asynchronous, event-driven JavaScript runtime for scalable backends.", category: "Backend" },
        { id: "Express", group: 3, radius: 15, context: "RESTful API creation and middleware routing for Node.js.", category: "Backend" },
        { id: "FastAPI", group: 3, radius: 25, context: "High-performance Python API framework for rendering instant data.", category: "Backend" },
        { id: "ASP.NET", group: 3, radius: 15, context: "Enterprise-grade backend architecture and secure data handling.", category: "Backend" },
        { id: "Firebase", group: 3, radius: 15, context: "Real-time NoSQL databases and secure user authentication flows.", category: "Backend" },
        { id: "PostgreSQL", group: 3, radius: 15, context: "Robust, scalable relational database administration.", category: "Backend" },
				{ id: "MySQL", group: 3, radius: 15, context: "Classic relational database structuring and querying.", category: "Backend" },
				{ id: "Django", group: 3, radius: 15, context: "Full library for python web development", category: "Backend" },
		{ id: "SSMS", group: 3, radius: 15, context: "Robust, scalable relational database administration.", category: "Backend" },
				{ id: "MongoDB", group: 3, radius: 20, context: "Robust, scalable NoSQL database.", category: "Backend" },

        // DevOps (Group 4)
        { id: "Git", group: 4, radius: 15, context: "Version control, branching strategies, and collaborative code merging.", category: "DevOps" },
        { id: "Docker", group: 4, radius: 15, context: "Containerizing applications for consistent deployment environments.", category: "DevOps" },
        { id: "AWS EC2", group: 4, radius: 15, context: "Cloud server provisioning, security groups, and scaling.", category: "DevOps" },
        { id: "Jenkins", group: 4, radius: 15, context: "Automated Continuous Integration and Continuous Deployment pipelines.", category: "DevOps" },
		{ id: "Linux", group: 4, radius: 15, context: "Bash scripting, server administration, and environment configuration.", category: "DevOps" },
				{ id: "Terraform", group: 4, radius: 15, context: "Bash scripting, server administration, and environment configuration.", category: "DevOps" },

        // Networking (Group 5)
        { id: "Cisco PT", group: 5, radius: 15, context: "Simulating complex enterprise network architectures and topologies.", category: "Networking" },
        { id: "Subnetting", group: 5, radius: 15, context: "IP address allocation and network segmentation for security/efficiency.", category: "Networking" },
        { id: "OSPF/RIP", group: 5, radius: 15, context: "Configuring dynamic routing protocols for seamless data packet delivery.", category: "Networking" },
        { id: "TCP/IP", group: 5, radius: 15, context: "Deep understanding of the fundamental internet communication suite.", category: "Networking" },
    ],
    links: [
        // Link hubs to Core
        { source: "Languages", target: "Core" },
        { source: "Frontend", target: "Core" },
        { source: "Backend", target: "Core" },
        { source: "DevOps", target: "Core" },
        { source: "Networking", target: "Core" },

        // Link Languages
        { source: "Javascript", target: "Languages" }, { source: "Typescript", target: "Languages" },
        { source: "Python", target: "Languages" }, { source: "Java", target: "Languages" },
        { source: "C#", target: "Languages" }, { source: "SQL", target: "Languages" },{ source: "PHP", target: "Languages" },

        // Link Frontend
        { source: "React", target: "Frontend" }, { source: "Next.js", target: "Frontend" },
        { source: "React Native", target: "Frontend" },
        { source: "Tailwind CSS", target: "Frontend" },

        // Link Backend
        { source: "Node.js", target: "Backend" }, { source: "Express", target: "Backend" },
        { source: "FastAPI", target: "Backend" }, { source: "ASP.NET", target: "Backend" }, 
        { source: "Firebase", target: "Backend" }, { source: "PostgreSQL", target: "Backend" },
        { source: "MySQL", target: "Backend" }, { source: "Django", target: "Backend" },{ source: "SSMS", target: "Backend" },{ source: "MongoDB", target: "Backend" },

        // Link DevOps
        { source: "Git", target: "DevOps" }, { source: "Docker", target: "DevOps" },
        { source: "AWS EC2", target: "DevOps" }, { source: "Jenkins", target: "DevOps" },
        { source: "Linux", target: "DevOps" }, { source: "Terraform", target: "DevOps" },

        // Link Networking
        { source: "Cisco PT", target: "Networking" }, { source: "Subnetting", target: "Networking" },
        { source: "OSPF/RIP", target: "Networking" }, { source: "TCP/IP", target: "Networking" },

        // ==========================================
        // TRUE NEO4J INTERCONNECTED MESH CROSS-LINKS
        // ==========================================
        { source: "React", target: "Javascript" },
        { source: "Next.js", target: "React" },
        { source: "React Native", target: "React" },
        { source: "Typescript", target: "Javascript" },
        { source: "Node.js", target: "Javascript" },
        { source: "Express", target: "Node.js" },
        { source: "FastAPI", target: "Python" },
        { source: "Django", target: "Python" },
        { source: "PostgreSQL", target: "SQL" },
        { source: "MySQL", target: "SQL" },
        { source: "Docker", target: "Linux" },
			{ source: "AWS EC2", target: "Linux" },
			{ source: "Terraform", target: "AWS EC2" },
			{ source: "SSMS", target: "SQL" },
    ]
};

// Colors mapping by group
const colorScale = d3.scaleOrdinal()
    .domain([0, 1, 2, 3, 4, 5])
    .range(["#1a1a1a", "#4F46E5", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"]);

// Setup the D3 Canvas
const container = document.getElementById("d3-container");
let simulation;
let svg;
let linkGroup;
let nodeGroup;

if (container) {
    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 800;

    svg = d3.select("#d3-container")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .style("touch-action", "none") // Force native ignore of document scrolling
        .style("-webkit-user-select", "none")
        .attr("viewBox", [0, 0, width, height]);

    // Rock solid hit area for touch/mouse
    svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "white")
        .style("opacity", "0")
        .style("pointer-events", "all");

    // Parent group for zooming 
    const gMain = svg.append("g");

    // Initialize Zoom/Pan Behavior
    const zoom = d3.zoom()
        .scaleExtent([0.3, 5])
        .on("zoom", (event) => {
            gMain.attr("transform", event.transform);
        });

    svg.call(zoom);

    // Bigger initial scale adjustment for mobile to make data highly visible
    if (width < 768) {
        svg.call(zoom.transform, d3.zoomIdentity.translate(width/2, height/2).scale(1.8).translate(-width/2, -height/2));
    }

    linkGroup = gMain.append("g");
    nodeGroup = gMain.append("g");

    // Initialize Physics Simulation
    simulation = d3.forceSimulation()
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(d => d.radius + 15).iterations(2));

    // The core draw function so we can destroy/rebuild the Neo4j grid
    function updateGraph(nodesArray, linksArray) {
        // Deep copy arrays for D3 so we don't mutate the original dataset
        const nodes = nodesArray.map(d => Object.assign({}, d));
        const links = linksArray.map(d => Object.assign({}, d));

        // Setup Links
        const link = linkGroup
            .selectAll("line")
            .data(links, d => d.source.id || d.source + "-" + d.target.id || d.target);

        link.exit().remove();
        
        const linkEnter = link.enter()
            .append("line")
            .attr("class", "link-line");
            
        const linkMerged = linkEnter.merge(link);

        // Setup Nodes
        const node = nodeGroup
            .selectAll("g")
            .data(nodes, d => d.id);
            
        node.exit().remove();

        const nodeEnter = node.enter()
            .append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended))
            .on("click", handleNodeClick);

        nodeEnter.append("circle")
            .attr("class", "node-circle")
            .attr("r", d => d.radius)
            .attr("fill", d => colorScale(d.group));

        nodeEnter.append("text")
            .attr("class", "node-label")
            .attr("dy", d => d.radius + 15)
            .attr("text-anchor", "middle")
            .text(d => d.id);

        const nodeMerged = nodeEnter.merge(node);

        // Reload Simulation
        simulation.nodes(nodes);
        simulation.force("link", d3.forceLink(links).id(d => d.id).distance(100));
        simulation.alpha(1).restart();

        simulation.on("tick", () => {
            linkMerged
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            nodeMerged.attr("transform", d => `translate(${d.x},${d.y})`);
        });
    }

    // Neo4j Drag Physics Functions
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        if (cursorOutline) cursorOutline.classList.add("hovering");
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        if (cursorOutline) cursorOutline.classList.remove("hovering");
    }

    // Modal Interaction
    const modal = document.getElementById('skillModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalContext = document.getElementById('modalContext');
    const closeBtn = document.getElementById('modalCloseBtn');

    function handleNodeClick(event, d) {
        event.stopPropagation();
        modalTitle.textContent = d.id;
        modalCategory.textContent = d.category;
        modalContext.textContent = d.context;
        modal.classList.add('active');
    }

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if(e.target === modal) modal.classList.remove('active');
    });

    // =======================================
    // ADVANCED CYPHER GRAPH ISOLATION LOGIC
    // =======================================
    const categorySelect = document.getElementById('cypherCategory');
    const nodeSelect = document.getElementById('cypherNode');
    const runBtn = document.getElementById('cypherRunBtn');
    const resetBtn = document.getElementById('cypherResetBtn');

    // Populate dependent dropdown
    function populateNodeDropdown(category) {
        nodeSelect.innerHTML = '<option value="All">All_Nodes</option>';
        
        let filteredNodes = stackData.nodes;
        if (category !== "All") {
            filteredNodes = stackData.nodes.filter(n => n.category === category || n.category === "Category Hub" && n.id === category);
        }

        filteredNodes.sort((a,b) => a.id.localeCompare(b.id)).forEach(n => {
            // Don't add structural hubs to detailed node list unless intentionally searching hubs
            if (n.category === "Core") return; 
            const opt = document.createElement('option');
            opt.value = n.id;
            opt.textContent = n.id;
            nodeSelect.appendChild(opt);
        });
    }

    categorySelect.addEventListener('change', (e) => {
        populateNodeDropdown(e.target.value);
    });

    function runCypherIsolation() {
        const targetCategory = categorySelect.value;
        const targetNodeId = nodeSelect.value;

        // If completely reset
        if (targetCategory === "All" && targetNodeId === "All") {
            updateGraph(stackData.nodes, stackData.links);
            return;
        }

        let isolatedNodes = [];
        let isolatedLinks = [];

        if (targetNodeId !== "All") {
            // User selected ONE specific node: Isolate it and its immediate connections
            isolatedLinks = stackData.links.filter(l => 
                l.source === targetNodeId || l.source.id === targetNodeId || 
                l.target === targetNodeId || l.target.id === targetNodeId
            );

            const connectedNodeIds = new Set();
            connectedNodeIds.add(targetNodeId);
            isolatedLinks.forEach(l => {
                connectedNodeIds.add(typeof l.source === 'object' ? l.source.id : l.source);
                connectedNodeIds.add(typeof l.target === 'object' ? l.target.id : l.target);
            });

            isolatedNodes = stackData.nodes.filter(n => connectedNodeIds.has(n.id));

        } else if (targetCategory !== "All") {
            // User selected ONLY a Category: Isolate that entire category subsystem
            isolatedNodes = stackData.nodes.filter(n => n.category === targetCategory || n.id === targetCategory || n.id === "Core");
            const isolatedIds = new Set(isolatedNodes.map(n => n.id));

            isolatedLinks = stackData.links.filter(l => {
                const srcId = typeof l.source === 'object' ? l.source.id : l.source;
                const tgtId = typeof l.target === 'object' ? l.target.id : l.target;
                return isolatedIds.has(srcId) && isolatedIds.has(tgtId);
            });
        }

        updateGraph(isolatedNodes, isolatedLinks);
    }

    runBtn.addEventListener('click', runCypherIsolation);
    
    resetBtn.addEventListener('click', () => {
        categorySelect.value = "All";
        populateNodeDropdown("All");
        nodeSelect.value = "All";
        updateGraph(stackData.nodes, stackData.links);
    });

    // Initialize Baseline
    populateNodeDropdown("All");
    updateGraph(stackData.nodes, stackData.links);

}


/* ─── Custom Cursor Tracking ──────────────────────────────── */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// Add magnetic hover effect to clickables
document.querySelectorAll('a, button, .card, .step-item, .icon-btn, .btn-primary').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline?.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline?.classList.remove('hovering');
    });
});

// =======================================
// SQL RELATIONAL TABLES LOGIC
// =======================================
function initSQLTables() {
    const tableContainer = document.getElementById('sqlTablesContainer');
    if (!tableContainer) return;

    // Helper to calculate dependencies (Foreign Keys)
    // We look for links where this node is the SOURCE, and the TARGET is not a generic category.
    const categories = ["Languages", "Frontend", "Backend", "DevOps", "Networking"];
    
    function getDependency(nodeId) {
        const link = stackData.links.find(l => {
            const srcId = typeof l.source === 'object' ? l.source.id : l.source;
            const tgtId = typeof l.target === 'object' ? l.target.id : l.target;
            return srcId === nodeId && !categories.includes(tgtId) && tgtId !== "Core";
        });
        if (link) {
            return typeof link.target === 'object' ? link.target.id : link.target;
        }
        return "NULL";
    }

    // Group nodes by category
    const groupedNodes = {
        "Languages": [],
        "Frontend": [],
        "Backend": [],
        "DevOps": [],
        "Networking": []
    };

    stackData.nodes.forEach(n => {
        if (groupedNodes[n.category]) {
            groupedNodes[n.category].push(n);
        }
    });

    // Generate Tables
    categories.forEach(cat => {
        const tableId = "tbl_" + cat.toLowerCase();
        let rowsHtml = "";
        
        groupedNodes[cat].sort((a,b) => a.id.localeCompare(b.id)).forEach((n, index) => {
            const fk = getDependency(n.id);
            rowsHtml += `
                <tr class="sql-row" data-name="${n.id}">
                    <td class="pk-col">${index + 1}</td>
                    <td class="name-col">${n.id}</td>
                    <td class="fk-col">${fk}</td>
                    <td class="context-col">${n.context}</td>
                </tr>
            `;
        });

        // Hide table entirely if no nodes exist for some reason
        if (groupedNodes[cat].length === 0) return;

        const tableHtml = `
            <div class="sql-table-wrapper" id="wrapper_${tableId}">
                <h3><i data-lucide="table-2" size="18"></i> ${tableId}</h3>
                <table class="styled-sql-table" id="${tableId}">
                    <thead>
                        <tr>
                            <th>id (PK)</th>
                            <th>name</th>
                            <th>dependency (FK)</th>
                            <th>context</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            </div>
        `;
        tableContainer.insertAdjacentHTML('beforeend', tableHtml);
    });

    // Re-initialize Lucide icons for the newly injected HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // SQL Interactive Logic
    const sqlTableSelect = document.getElementById('sqlTable');
    const sqlRowSelect = document.getElementById('sqlRow');
    const sqlRunBtn = document.getElementById('sqlRunBtn');
    const sqlResetBtn = document.getElementById('sqlResetBtn');

    if (!sqlTableSelect || !sqlRowSelect) return;

    function populateSqlRowDropdown(tableVal) {
        sqlRowSelect.innerHTML = '<option value="All">All_Rows</option>';
        
        let targetCategory = "All";
        if (tableVal !== "All") {
            targetCategory = tableVal.replace("tbl_", ""); // e.g. "languages"
        }

        let filteredNodes = stackData.nodes;
        if (targetCategory !== "All") {
            filteredNodes = stackData.nodes.filter(n => n.category && n.category.toLowerCase() === targetCategory);
        }

        // Exclude Category Hubs and Core from being searchable rows
        filteredNodes = filteredNodes.filter(n => n.category !== "Category Hub" && n.category !== "Core");

        filteredNodes.sort((a,b) => a.id.localeCompare(b.id)).forEach(n => {
            const opt = document.createElement('option');
            opt.value = n.id;
            opt.textContent = n.id;
            sqlRowSelect.appendChild(opt);
        });
    }

    sqlTableSelect.addEventListener('change', (e) => {
        populateSqlRowDropdown(e.target.value);
    });

    function runSql() {
        const tableVal = sqlTableSelect.value;
        const rowVal = sqlRowSelect.value;

        // Display/Hide Entire Tables
        const wrappers = document.querySelectorAll('.sql-table-wrapper');
        wrappers.forEach(w => {
            if (tableVal === "All") {
                w.style.display = "block";
            } else {
                w.style.display = w.id === "wrapper_" + tableVal ? "block" : "none";
            }
        });

        // Display/Hide Specific Rows
        const rows = document.querySelectorAll('.sql-row');
        rows.forEach(r => {
            if (rowVal === "All") {
                r.style.display = "table-row";
            } else {
                r.style.display = r.dataset.name === rowVal ? "table-row" : "none";
            }
        });
    }

    sqlRunBtn.addEventListener('click', runSql);

    sqlResetBtn.addEventListener('click', () => {
        sqlTableSelect.value = "All";
        populateSqlRowDropdown("All");
        sqlRowSelect.value = "All";
        runSql();
    });

    // Init dependent dropdown on load
    populateSqlRowDropdown("All");
}

// =======================================
// DYNAMIC PROJECTS RENDERING LOGIC
// =======================================
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    let html = "";
    projectsData.forEach(proj => {
        
        // Build tech stack pills
        let stackHtml = "";
        if (proj.stack && proj.stack.length > 0) {
            stackHtml = `<div class="project-stack">` + 
                proj.stack.map(tech => `<span class="project-pill">${tech}</span>`).join('') +
            `</div>`;
        }

        // Build Github / Live links
        let linksHtml = "";
        if (proj.github || proj.live) {
            linksHtml = `<div class="project-links">`;
            if (proj.github) {
                linksHtml += `<a href="${proj.github}" target="_blank" class="btn-link"><i data-lucide="github" size="16"></i> GitHub</a>`;
            }
            if (proj.live) {
                linksHtml += `<a href="${proj.live}" target="_blank" class="btn-link"><i data-lucide="external-link" size="16"></i> Live Site</a>`;
            }
            linksHtml += `</div>`;
        }

        html += `
            <div class="step-item">
                <div class="step-icon"><i data-lucide="${proj.icon}" size="32"></i></div>
                <h3 style="font-size: 1.2rem; margin-bottom: 10px;">${proj.title}</h3>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">${proj.description}</p>
                ${stackHtml}
                ${linksHtml}
            </div>
        `;
    });

    container.innerHTML = html;
}


document.addEventListener("DOMContentLoaded", () => {
    initSQLTables();
    renderProjects();
    if (window.lucide) {
        window.lucide.createIcons();
    }
});