// schedule.js
// Corrected against high-resolution embedded images extracted directly from schedule.pdf
// (the PDF's tables are screenshots, not real text, so every cell below was verified
// visually, zone by zone, day by day, against the source image).

// 1. Definitions of spaces/zonas based on the original schedule
const spaces = {
    1: "Biblioteca",
    2: "Coliseo: cancha, graderías, frontón + ping pong",
    3: "Pasillo 8° y 9° + Baños",
    4: "Patio de formación (si llueve: pasillo restaurante)",
    5: "Kiosko filas (si llueve: Biblioteca)",
    6: "Canchas detrás teatro (si llueve: pasillos 9°)",
    7: "Campo de Fútbol Teresiano (si llueve: Coliseo)",
    8: "Zona verde talleres + gradas patinaje + LC (si llueve: Coliseo)",
    9: "Campo de Fútbol Camino + Montañita (si llueve: Coliseo)",
    10: "Zona verde costado 9º (si llueve: Segundo piso)",
    11: "Pista Atletica (si llueve: pasillo 8°)",
    12: "Pasillo segundo piso"
};

const scheduleData = [];

// Helper function to normalize accent/typo variants found in the source PDF.
// The PDF was exported from a font that renders some accented letters incorrectly
// (e.g. "é" shows up as "è", producing "Jimènez" instead of "Jiménez"). The rule
// requested is: treat these as the SAME person, just merge them under one
// canonical, correctly-accented name.
function normalizeName(name) {
    if (!name) return "";
    const cleanName = name.trim();
    const map = {
        "Daniel Jimènez": "Daniel Jiménez",
        "Angel Torres": "Ángel Torres",
        "Mauricio Rodriguez": "Mauricio Rodríguez",
        // Kept as defensive normalization in case these variants appear in future
        // exports of the PDF, though they were not found in the current source:
        "Glomar Gómez": "Giomar Gómez",
        "Fernando Albina": "Fernando Albino"
    };
    return map[cleanName] || cleanName;
}

// Helper function to efficiently load arrays of people across Days 1-5
function loadSchedule(type, zone, time, peopleArray) {
    const days = ["Día-1", "Día-2", "Día-3", "Día-4", "Día-5"];
    peopleArray.forEach((person, index) => {
        if (person && person.trim() !== "") {
            scheduleData.push({
                type: type,
                zone: zone,
                time: time,
                day: days[index],
                person: normalizeName(person)
            });
        }
    });
}

// ==========================================
// 2. BREAK SCHEDULE DATABASE
// Standardized Times: 10:00-10:20 and 10:20-10:45
// Re-verified cell-by-cell against the high-res source image.
// ==========================================

// ZONA 1
loadSchedule("Break", 1, "10:00-10:20", ["N.A.", "N.A.", "N.A.", "N.A.", "N.A."]);
loadSchedule("Break", 1, "10:20-10:45", ["Diana Hernández", "Giomar Gómez", "Tatiana Contreras", "Nelson Barrera", "Daniel Vargas"]);

// ZONA 2
loadSchedule("Break", 2, "10:00-10:20", ["Inglés", "Carolina Franco", "Juan F. Ávila", "Daniel Jimènez", "MATH"]);
loadSchedule("Break", 2, "10:20-10:45", ["Alexander Gerena", "Viviana Collazos", "Giomar Gómez", "Tatiana Contreras", "Nelson Barrera"]);

// ZONA 3
loadSchedule("Break", 3, "10:00-10:20", ["SOCIALES", "Fernando Albino", "Juliana Camargo", "Juan F. Ávila", "Daniel Jimènez"]);
loadSchedule("Break", 3, "10:20-10:45", ["Daniel Vargas", "Camilo Ordoñez", "Viviana Collazos", "Giomar Gómez", "Tatiana Contreras"]);

// ZONA 4
loadSchedule("Break", 4, "10:00-10:20", ["MATH", "Lyda Molano", "Fernando Albino", "Juliana Camargo", "Juan F. Ávila"]);
loadSchedule("Break", 4, "10:20-10:45", ["Nelson Barrera", "Juliana Camargo", "Camilo Ordoñez", "Viviana Collazos", "Giomar Gómez"]);

// ZONA 5
loadSchedule("Break", 5, "10:00-10:20", ["Daniel Jimènez", "Luz A. Castellanos", "Lyda Molano", "Fernando Albino", "Ángel Torres"]);
loadSchedule("Break", 5, "10:20-10:45", ["Tatiana Contreras", "Alexander Roa", "Carolina Franco", "Camilo Ordoñez", "Viviana Collazos"]);

// ZONA 6
loadSchedule("Break", 6, "10:00-10:20", ["Juan F. Ávila", "MATH", "SOCIALES", "Lyda Molano", "Fernando Albino"]);
loadSchedule("Break", 6, "10:20-10:45", ["Giomar Gómez", "Ángel Torres", "Alexander Roa", "Carolina Franco", "Camilo Ordoñez"]);

// ZONA 7
loadSchedule("Break", 7, "10:00-10:20", ["Juliana Camargo", "Rafael García", "Luz A. Castellanos", "Inglés", "Lyda Molano"]);
loadSchedule("Break", 7, "10:20-10:45", ["Viviana Collazos", "Ana M. Vega", "Ángel Torres", "Alexander Roa", "Carolina Franco"]);

// ZONA 8
loadSchedule("Break", 8, "10:00-10:20", ["Fernando Albino", "Diana Hernández", "Rafael García", "Luz A. Castellanos", "Ana M. Vega"]);
loadSchedule("Break", 8, "10:20-10:45", ["Camilo Ordoñez", "Tatiana Contreras", "Ana M. Vega", "Ángel Torres", "Alexander Roa"]);

// ZONA 9
loadSchedule("Break", 9, "10:00-10:20", ["Lyda Molano", "Alexander Gerena", "Diana Hernández", "Rafael García", "Luz A. Castellanos"]);
loadSchedule("Break", 9, "10:20-10:45", ["Carolina Franco", "SOCIALES", "Inglés", "Ana M. Vega", "Juliana Camargo"]);

// ZONA 10
loadSchedule("Break", 10, "10:00-10:20", ["Alexander Roa", "Daniel Vargas", "Alexander Gerena", "Diana Hernández", "Rafael García"]);
loadSchedule("Break", 10, "10:20-10:45", ["Mauricio Rodríguez", "Mauricio Rodríguez", "Mauricio Rodríguez", "Mauricio Rodríguez", "Mauricio Rodríguez"]);

// ZONA 11
loadSchedule("Break", 11, "10:00-10:20", ["Luz A. Castellanos", "Nelson Barrera", "MATH", "SOCIALES", "Inglés"]);
loadSchedule("Break", 11, "10:20-10:45", ["Ángel Torres", "Daniel Jimènez", "Daniel Vargas", "Alexander Gerena", "Diana Hernández"]);

// ZONA 12
loadSchedule("Break", 12, "10:00-10:20", ["Rafael García", "Inglés", "Nelson Barrera", "Daniel Vargas", "Alexander Gerena"]);
loadSchedule("Break", 12, "10:20-10:45", ["Ana M. Vega", "Juan F. Ávila", "Daniel Jimènez", "MATH", "SOCIALES"]);


// ==========================================
// 3. LUNCH SCHEDULE DATABASE
// Standardized Times: 1:00-1:30 and 1:30-2:00
// Re-verified cell-by-cell against the high-res source image (this section
// matched the original file already).
//
// NOTE: Juliana Camargo does not appear anywhere in the Lunch table in the
// source PDF — not once, on any of the 5 days. This is a genuine gap in the
// original document (confirmed visually), not a transcription error. The
// auto-correction step below will surface her as "Pendiente / TBD" for lunch
// on all 5 days so she still appears in every day as required.
// ==========================================

// ZONA 1
loadSchedule("Lunch", 1, "1:00-1:30", ["N.A.", "N.A.", "N.A.", "N.A.", "N.A."]);
loadSchedule("Lunch", 1, "1:30-2:00", ["Giomar Gómez", "Viviana Collazos", "Daniel Jimènez", "Lyda Molano", "Tatiana Contreras"]);

// ZONA 2
loadSchedule("Lunch", 2, "1:00-1:30", ["Lyda Molano", "Juan F. Ávila", "Viviana Collazos", "Giomar Gómez", "Daniel Jimènez"]);
loadSchedule("Lunch", 2, "1:30-2:00", ["Mauricio Rodríguez", "Mauricio Rodríguez", "Mauricio Rodríguez", "Mauricio Rodríguez", "Mauricio Rodríguez"]);

// ZONA 3
loadSchedule("Lunch", 3, "1:00-1:30", ["Fernando Albino", "Luz A. Castellanos", "Giomar Gómez", "Juan F. Ávila", "Viviana Collazos"]);
loadSchedule("Lunch", 3, "1:30-2:00", ["Nelson Barrera", "Ana M. Vega", "Luz A. Castellanos", "Daniel Jimènez", "Juan F. Ávila"]);

// ZONA 4
loadSchedule("Lunch", 4, "1:00-1:30", ["Daniel Vargas", "Carolina Franco", "Ana M. Vega", "Luz A. Castellanos", "Lyda Molano"]);
loadSchedule("Lunch", 4, "1:30-2:00", ["MATH", "Daniel Jimènez", "Carolina Franco", "Ana M. Vega", "Luz A. Castellanos"]);

// ZONA 5
loadSchedule("Lunch", 5, "1:00-1:30", ["Rafael García", "Alexander Roa", "Juan F. Ávila", "Carolina Franco", "Ana M. Vega"]);
loadSchedule("Lunch", 5, "1:30-2:00", ["Viviana Collazos", "Camilo Ordoñez", "Alexander Roa", "Viviana Collazos", "Carolina Franco"]);

// ZONA 6
loadSchedule("Lunch", 6, "1:00-1:30", ["N.A.", "N.A.", "N.A.", "N.A.", "N.A."]);
loadSchedule("Lunch", 6, "1:30-2:00", ["Diana Hernández", "Ángel Torres", "Camilo Ordoñez", "Rafael García", "Alexander Roa"]);

// ZONA 7
loadSchedule("Lunch", 7, "1:00-1:30", ["SOCIALES", "Alexander Gerena", "Ángel Torres", "Inglés", "Camilo Ordoñez"]);
loadSchedule("Lunch", 7, "1:30-2:00", ["Alexander Gerena", "Diana Hernández", "Rafael García", "Alexander Roa", "Ángel Torres"]);

// ZONA 8
loadSchedule("Lunch", 8, "1:00-1:30", ["Juan F. Ávila", "Inglés", "Diana Hernández", "Camilo Ordoñez", "Nelson Barrera"]);
loadSchedule("Lunch", 8, "1:30-2:00", ["Daniel Jimènez", "Rafael García", "Inglés", "Diana Hernández", "Fernando Albino"]);

// ZONA 9
loadSchedule("Lunch", 9, "1:00-1:30", ["Luz A. Castellanos", "SOCIALES", "Alexander Gerena", "Ángel Torres", "Diana Hernández"]);
loadSchedule("Lunch", 9, "1:30-2:00", ["Ana M. Vega", "Daniel Vargas", "SOCIALES", "Alexander Gerena", "Inglés"]);

// ZONA 10
loadSchedule("Lunch", 10, "1:00-1:30", ["Carolina Franco", "MATH", "Tatiana Contreras", "SOCIALES", "Alexander Gerena"]);
loadSchedule("Lunch", 10, "1:30-2:00", ["Tatiana Contreras", "Nelson Barrera", "Lyda Molano", "Daniel Vargas", "MATH"]);

// ZONA 11
loadSchedule("Lunch", 11, "1:00-1:30", ["Alexander Roa", "Fernando Albino", "Nelson Barrera", "MATH", "Daniel Vargas"]);
loadSchedule("Lunch", 11, "1:30-2:00", ["Camilo Ordoñez", "Tatiana Contreras", "Fernando Albino", "Nelson Barrera", "Rafael García"]);

// ZONA 12
loadSchedule("Lunch", 12, "1:00-1:30", ["Ángel Torres", "Lyda Molano", "Daniel Vargas", "Fernando Albino", "Giomar Gómez"]);
loadSchedule("Lunch", 12, "1:30-2:00", ["Inglés", "Giomar Gómez", "MATH", "Tatiana Contreras", "SOCIALES"]);

// ==========================================
// 4. DATA VALIDATION AND AUTO-CORRECTION
// Mandates 1 Break and 1 Lunch per person per day.
// ==========================================

const finalScheduleData = [];
const tracker = {};
const actualPeople = new Set();
// Exclude subjects and placeholders from mandatory daily checks
const nonPeople = new Set(["N.A.", "MATH", "Inglés", "SOCIALES"]);

// Step A: Build map of all assignments
scheduleData.forEach(item => {
    if (!nonPeople.has(item.person)) {
        actualPeople.add(item.person);
    }

    if (!tracker[item.person]) {
        tracker[item.person] = { Break: {}, Lunch: {} };
    }
    if (!tracker[item.person][item.type][item.day]) {
        tracker[item.person][item.type][item.day] = [];
    }
    tracker[item.person][item.type][item.day].push(item);
});

// Step B: Pass-through non-people directly
scheduleData.forEach(item => {
    if (nonPeople.has(item.person)) {
        finalScheduleData.push(item);
    }
});

// Step C: Ensure actual people have exactly 1 shift per day per type
const daysList = ["Día-1", "Día-2", "Día-3", "Día-4", "Día-5"];
const typesList = ["Break", "Lunch"];

actualPeople.forEach(person => {
    typesList.forEach(type => {
        const missingDays = [];
        const extraAssignments = [];

        // Identify missing days and duplicates
        daysList.forEach(day => {
            const dayAssignments = tracker[person][type][day] || [];
            if (dayAssignments.length === 0) {
                missingDays.push(day);
            } else {
                // Register the first assignment
                finalScheduleData.push(dayAssignments[0]);
                // Store duplicates to fill missing days
                for (let i = 1; i < dayAssignments.length; i++) {
                    extraAssignments.push(dayAssignments[i]);
                }
            }
        });

        // Fill missing days
        missingDays.forEach(missingDay => {
            if (extraAssignments.length > 0) {
                // Reuse a duplicate assignment from another day to fill the gap
                const extra = extraAssignments.shift();
                finalScheduleData.push({
                    ...extra,
                    day: missingDay,
                    note: `Reasignado de un día duplicado en PDF`
                });
            } else {
                // If no duplicate exists to shift, create a pending slot so they still appear
                finalScheduleData.push({
                    type: type,
                    zone: "Pendiente",
                    time: "TBD",
                    day: missingDay,
                    person: person,
                    note: `Falta en PDF original - Agregado por sistema`
                });
            }
        });
    });
});

// Overwrite array with strictly corrected data
scheduleData.length = 0;
scheduleData.push(...finalScheduleData);


// ==========================================
// 5. DOM Manipulation and Search Logic
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const zoneSelect = document.getElementById('zoneSelect');
    const teacherSearchInput = document.getElementById('teacherSearch');
    const scheduleTypeFilter = document.getElementById('scheduleType');
    const daySelectFilter = document.getElementById('daySelect');
    const resultsContainer = document.getElementById('resultsContainer');

    // Populate Zone dropdown
    if(zoneSelect) {
        Object.keys(spaces).forEach(zoneId => {
            const option = document.createElement('option');
            option.value = zoneId;
            option.textContent = `Zona ${zoneId}`;
            zoneSelect.appendChild(option);
        });
        // Add pending zone option for missing data
        const pendingOption = document.createElement('option');
        pendingOption.value = "Pendiente";
        pendingOption.textContent = `Pendiente (Sin asignar)`;
        zoneSelect.appendChild(pendingOption);
    }

    // Filter and Render logic
    function renderResults() {
        if(!resultsContainer) return;

        const searchQuery = teacherSearchInput.value.toLowerCase().trim();
        const typeFilter = scheduleTypeFilter.value;
        const dayFilter = daySelectFilter.value;
        const zoneFilter = zoneSelect.value;

        resultsContainer.innerHTML = '';

        const filteredData = scheduleData.filter(item => {
            const matchSearch = item.person.toLowerCase().includes(searchQuery);
            const matchType = typeFilter === 'all' || item.type === typeFilter;
            const matchDay = dayFilter === 'all' || item.day === dayFilter;
            const matchZone = zoneFilter === 'all' || item.zone.toString() === zoneFilter;
            return matchSearch && matchType && matchDay && matchZone;
        });

        if (filteredData.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No assignments found</h3>
                    <p>Try adjusting your search filters or checking for typos.</p>
                </div>`;
            return;
        }

        // Render Cards
        filteredData.forEach(item => {
            // Hide "N.A." placeholders unless the user is actively searching for them
            if (item.person === "N.A." && searchQuery === "") return;

            const zoneDisplay = spaces[item.zone] || "Sin zona asignada";
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.person}</h3>
                <p><span class="badge">Day</span> ${item.day}</p>
                <p><span class="badge">Type</span> ${item.type}</p>
                <p><span class="badge">Time</span> ${item.time}</p>
                <p><span class="badge">Zona ${item.zone}</span> ${zoneDisplay}</p>
                ${item.note ? `<p style="color: #d9534f; font-size: 0.85em; margin-top: 8px;">* ${item.note}</p>` : ""}
            `;
            resultsContainer.appendChild(card);
        });
    }

    // Attach Event Listeners
    if(teacherSearchInput) teacherSearchInput.addEventListener('input', renderResults);
    if(scheduleTypeFilter) scheduleTypeFilter.addEventListener('change', renderResults);
    if(daySelectFilter) daySelectFilter.addEventListener('change', renderResults);
    if(zoneSelect) zoneSelect.addEventListener('change', renderResults);

    // Initial render
    renderResults();
});