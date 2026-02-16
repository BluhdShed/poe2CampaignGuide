function renderGuide() {
    const container = document.getElementById('guide-content');
    const navBar = document.getElementById('nav-bar');
    
    if (typeof campaignData === 'undefined') {
        container.innerHTML = "Error: campaignData not found.";
        return;
    }

    container.innerHTML = ''; 
    navBar.innerHTML = ''; 

    campaignData.walkthrough.forEach((act, actIdx) => {
        // --- 1. Navigation Button ---
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.innerText = act.name;
        navBtn.onclick = () => {
            const target = document.getElementById(act.id);
            // If user clicks nav, ensure it expands and save that state
            target.classList.remove('collapsed');
            localStorage.setItem(`collapse-${act.id}`, 'expanded');
            target.scrollIntoView();
        };
        navBar.appendChild(navBtn);

        // --- 2. Act Section ---
        const actDiv = document.createElement('div');
        actDiv.className = 'act-section';
        actDiv.id = act.id;

        // Check localStorage for saved collapse state
        // Default to 'expanded' for the very first act, 'collapsed' for others if no save exists
        const savedState = localStorage.getItem(`collapse-${act.id}`);
        if (savedState === 'collapsed' || (!savedState && actIdx > 0)) {
            actDiv.classList.add('collapsed');
        }

        // --- 3. Act Header (The Toggle) ---
        const header = document.createElement('h2');
        header.className = 'act-header';
        header.innerText = act.name;
        header.onclick = () => {
            const isNowCollapsed = actDiv.classList.toggle('collapsed');
            // Save the new state
            localStorage.setItem(`collapse-${act.id}`, isNowCollapsed ? 'collapsed' : 'expanded');
        };
        actDiv.appendChild(header);

        // --- 4. Content Wrapper ---
        const contentDiv = document.createElement('div');
        contentDiv.className = 'act-content';

        act.locations.forEach((loc, locIdx) => {
            const locDiv = document.createElement('div');
            locDiv.className = 'location-group';
            locDiv.innerHTML = `<div class="location-name">${loc.name}</div>`;

            loc.steps.forEach((step, stepIdx) => {
                const storageKey = `step-${actIdx}-${locIdx}-${stepIdx}`;
                const isCompleted = localStorage.getItem(storageKey) === 'true';

                const stepDiv = document.createElement('div');
                stepDiv.className = `step ${step.is_optional ? 'optional' : ''} ${isCompleted ? 'completed' : ''}`;
                
                stepDiv.innerHTML = `
                    <div class="checkbox-container">
                        <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                               onchange="toggleStep('${storageKey}', this)">
                    </div>
                    <img src="images/${step.type}.png" class="icon" alt="${step.type}" onerror="this.src='images/default.png'">
                    <div class="instruction">
                        ${step.instruction}
                        ${step.is_optional ? '<span class="tag-optional">Optional</span>' : ''}
                    </div>
                `;
                locDiv.appendChild(stepDiv);
            });
            contentDiv.appendChild(locDiv);
        });

        actDiv.appendChild(contentDiv);
        container.appendChild(actDiv);
    });
}

// Function to handle clicking the checkbox
function toggleStep(key, checkbox) {
    const stepDiv = checkbox.closest('.step');
    
    if (checkbox.checked) {
        stepDiv.classList.add('completed');
        localStorage.setItem(key, 'true');
    } else {
        stepDiv.classList.remove('completed');
        localStorage.setItem(key, 'false');
    }
}

function resetProgress() {
    // Updated the text to mention 'window states'
    if (confirm("Are you sure you want to clear all progress and reset the view?")) {
        localStorage.clear();
        
        // Keep the cookie clearing just in case you use them later
        document.cookie.split(";").forEach(function(c) { 
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
        });

        location.reload();
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', renderGuide);
