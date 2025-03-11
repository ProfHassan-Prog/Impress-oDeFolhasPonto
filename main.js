document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("table.mes");
    if (!table) return; 

    const totalDias = 31; 

    for (let i = 1; i <= totalDias; i++) {
        const tr = document.createElement("tr");
        
        const tdDia = document.createElement("td");
        tdDia.textContent = i.toString().padStart(2, "0");
        tr.appendChild(tdDia);

        for (let j = 0; j < 8; j++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
});
