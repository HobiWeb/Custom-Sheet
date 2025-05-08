
const imagePaths = {
    baseMaterial: {
        "18cm Pocket Encasement + Rl": "images/18cm Pocket Encasement + Rl.png",
        "20cm Semi Ortho Foam (D50)": "images/20cm Semi Ortho Foam (D50).png",
        "20cm Ortho Foam (D70)": "images/20cm Ortho Foam (D70).png",
        "20cm Foam (D24)": "images/20cm Foam (D24).png",
        "22cm Pocket Encasement + Rl": "images/22cm Pocket Encasement + Rl.png"
    },
    supportLayer: {
        "4cm Orthopedic (D120)": "images/4cm Orthopedic (D120).png",
        "10cm Semi Orthopedic D50": "images/10cm Semi Orthopedic D50.png",
        "4cm Semi Orthopedic D50": "images/4cm Semi Orthopedic D50.png",
        "15cm Semi Orthopedic D50": "images/15cm Semi Orthopedic D50.png",
        "5cm Semi Orthopedic D50": "images/5cm Semi Orthopedic D50.png",
        "6cm D24": "images/6cm D24.png"
    },
    comfortLayer: {
        "2cm D24": "images/2cm D24.png",
        "2cm R50": "images/2cm R50.png",
        "3cm R50": "images/3cm R50.png",
        "Synth Latex D26 1,5cm": "images/Synth Latex D26 1,5cm.png",
        "Synth Latex D26 2cm": "images/Synth Latex D26 2cm.png",
        "Synth Latex D50 2cm": "images/Synth Latex D50 2cm med.png",
        "Synth Latex D50 5cm": "images/Synth Latex D50 5cm med.png",
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam A Grade (Min qty 1,6m3) 4cm med.png",
        "Latex A Grade 5cm": "images/Latex A Grade 5cm med.png",
        "Latex B Grade 5cm": "images/Latex B Grade 5cm med.png",
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam B Grade (Min qty 1,6m3) 4cm med.png"
    },
    layerLast: {
        "2cm D24": "images/2cm D24 ektra.png",
        "2cm R50": "images/2cm R50 ektra.png",
        "3cm R50": "images/3cm R50 ektra.png",
        "Synth Latex D26 1,5cm": "images/Synth Latex D26 1,5cm ektra.png",
        "Synth Latex D26 2cm": "images/Synth Latex D26 2cm ektra.png",
        "Synth Latex D50 2cm": "images/Synth Latex D50 2cm.png",
        "Synth Latex D50 5cm": "images/Synth Latex D50 5cm.png",
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam A Grade (Min qty 1,6m3) 4cm.png",
        "Latex A Grade 5cm": "images/Latex A Grade 5cm.png",
        "Latex B Grade 5cm": "images/Latex B Grade 5cm.png",
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": "images/Memory Foam B Grade (Min qty 1,6m3) 4cm.png"
    },
    additionalLayer: {
        "1 Side 5 Cm Quilting Top": "images/1cm Foam.png",
        "1 Side Non Quilting": "images/2cm Foam.png",
        "2 Side 5 Cm Quilting 2X": "images/3cm Foam.png",
        "2 Side 5 Cm Quilting - Non Quilting": "images/4cm Foam.png",
        "2 Side Non Quilting 2X": "images/5cm Foam.png"
    }
};
const prices = {
    baseMaterial: {
        "none": [0, 0, 0, 0, 0, 0],
        "18cm Pocket Encasement + Rl": [3027500, 3605000, 4378500, 5243000, 5404000, 5918500],
        "20cm Semi Ortho Foam (D50)": [2898000, 3864000, 4508000, 5148500, 5792500, 6436500],
        "20cm Ortho Foam (D70)": [3958500, 5274500, 6153000, 7035000, 7913500, 8792000],
        "20cm Foam (D24)": [3227000, 4305000, 5019000, 5736500, 6454000, 7171500],
        "22cm Pocket Encasement + Rl": [3472000, 4445000, 5012000, 5582500, 6153000, 6727000]
    },
    supportLayer: {
        "none": [0, 0, 0, 0, 0, 0],
        "4cm Orthopedic (D120)": [1043000, 1393000, 1624000, 1855000, 2086000, 2317000],
        "10cm Semi Orthopedic D50": [1088500, 1449000, 1690500, 1932000, 2173500, 2415000],
        "4cm Semi Orthopedic D50": [437500, 581000, 679000, 773500, 871500, 966000],
        "15cm Semi Orthopedic D50": [1631000, 2173500, 2534000, 2898000, 3258500, 3622500],
        "5cm Semi Orthopedic D50": [546000, 724500, 847000, 966000, 1088500, 1207500],
        "6cm D24": [728000, 969500, 1130500, 1291500, 1452500, 1613500]
    },
    comfortLayer: {
        "none": [0, 0, 0, 0, 0, 0],
        "2cm D24": [245000, 325500, 378000, 430500, 486500, 539000],
        "2cm R50": [220500, 290500, 339500, 388500, 437500, 483000],
        "3cm R50": [329000, 437500, 507500, 581000, 654500, 724500],
        "Synth Latex D26 1,5cm": [259000, 343000, 399000, 455000, 514500, 570500],
        "Synth Latex D26 2cm": [343000, 455000, 532000, 609000, 682500, 759500],
        "Synth Latex D50 2cm": [448000, 595000, 696500, 794500, 892500, 990500],
        "Synth Latex D50 5cm": [1116500, 1487500, 1736000, 1981000, 2229500, 2478000],
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": [3552500, 4739000, 5526500, 6317500, 7105000, 7896000],
        "Latex A Grade 5cm": [4018000, 5355000, 6247500, 7140000, 8032500, 8925000],
        "Latex B Grade 5cm": [3073000, 4095000, 4777500, 5460000, 6142500, 6825000],
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": [2492000, 3321500, 3874500, 4427500, 4980500, 5533500]
    },
    layerLast: {
        "none": [0, 0, 0, 0, 0, 0],
        "2cm D24": [245000, 325500, 378000, 430500, 486500, 539000],
        "2cm R50": [220500, 290500, 339500, 388500, 437500, 483000],
        "3cm R50": [329000, 437500, 507500, 581000, 654500, 724500],
        "Synth Latex D26 1,5cm": [259000, 343000, 399000, 455000, 514500, 570500],
        "Synth Latex D26 2cm": [343000, 455000, 532000, 609000, 682500, 759500],
        "Synth Latex D50 2cm": [448000, 595000, 696500, 794500, 892500, 990500],
        "Synth Latex D50 5cm": [1116500, 1487500, 1736000, 1981000, 2229500, 2478000],
        "Memory Foam A Grade (Min Qty 1,6m3) 4cm": [3552500, 4739000, 5526500, 6317500, 7105000, 7896000],
        "Latex A Grade 5cm": [4018000, 5355000, 6247500, 7140000, 8032500, 8925000],
        "Latex B Grade 5cm": [3073000, 4095000, 4777500, 5460000, 6142500, 6825000],
        "Memory Foam B Grade (Min Qty 1,6m3) 4cm": [2492000, 3321500, 3874500, 4427500, 4980500, 5533500]
    },
    additionalLayer: {
        "none": [0, 0, 0, 0, 0, 0],
        "1 Side 5 Cm Quilting Top": [2523000, 3219000, 3681000, 4146000, 4611000, 5073000],
        "1 Side Non Quilting": [1107000, 1329000, 1479000, 1629000, 1779000, 1926000],
        "2 Side 5 Cm Quilting 2X": [4611000, 6003000, 6930000, 7860000, 8787000, 9718000],
        "2 Side 5 Cm Quilting - Non Quilting": [2991000, 3687000, 4149000, 4614000, 5079000, 5418000],
        "2 Side Non Quilting 2X": [1323000, 1620000, 1818000, 2016000, 2190000, 2373000]
    }
};


// Contoh pemotongan — kamu bisa lanjutkan bagian `prices` dari file aslinya karena terlalu panjang
// atau saya bisa bantu kirimkan bagian lengkapnya juga kalau kamu butuh.

function updateSelection() {
    const base = document.getElementById('baseMaterial').value;
    const support = document.getElementById('supportLayer').value;
    const comfort = document.getElementById('comfortLayer').value;
    const layer = document.getElementById('layerLast').value;
    const extra = document.getElementById('additionalLayer').value;
    const size = parseInt(document.getElementById('size').value);

    document.getElementById('baseMaterialImage').src = imagePaths.baseMaterial[base] || '';
    document.getElementById('supportLayerImage').src = imagePaths.supportLayer[support] || '';
    document.getElementById('comfortLayerImage').src = imagePaths.comfortLayer[comfort] || '';
    document.getElementById('layerLastImage').src = imagePaths.layerLast[layer] || '';
    document.getElementById('additionalLayerImage').src = imagePaths.additionalLayer[extra] || '';

    const total = prices.baseMaterial[base][size] +
                  prices.supportLayer[support][size] +
                  prices.comfortLayer[comfort][size] +
                  prices.layerLast[layer][size] +
                  prices.additionalLayer[extra][size];

    document.getElementById('totalPrice').innerText = `Rp ${total.toLocaleString()}`;
}

function printSelection() {
    const name = prompt("Enter your name:");
    const address = prompt("Enter your address:");
    const phone = prompt("Enter your phone number:");

    const selections = {
        base: document.getElementById('baseMaterial').options[document.getElementById('baseMaterial').selectedIndex].text,
        support: document.getElementById('supportLayer').options[document.getElementById('supportLayer').selectedIndex].text,
        comfort: document.getElementById('comfortLayer').options[document.getElementById('comfortLayer').selectedIndex].text,
        layer: document.getElementById('layerLast').options[document.getElementById('layerLast').selectedIndex].text,
        extra: document.getElementById('additionalLayer').options[document.getElementById('additionalLayer').selectedIndex].text,
        size: document.getElementById('size').options[document.getElementById('size').selectedIndex].text,
        price: document.getElementById('totalPrice').innerText
    };

    const content = `
        <html><head><title>Invoice</title></head><body>
        <h2>Customer: ${name}</h2>
        <p>Address: ${address}</p><p>Phone: ${phone}</p>
        <table border="1">
        <tr><td>Base</td><td>${selections.base}</td></tr>
        <tr><td>Support</td><td>${selections.support}</td></tr>
        <tr><td>Comfort</td><td>${selections.comfort}</td></tr>
        <tr><td>Extra</td><td>${selections.layer}</td></tr>
        <tr><td>Finishing</td><td>${selections.extra}</td></tr>
        <tr><td>Size</td><td>${selections.size}</td></tr>
        <tr><td>Total</td><td>${selections.price}</td></tr>
        </table></body></html>
    `;

    const newWin = window.open('', '', 'width=600,height=400');
    newWin.document.write(content);
    newWin.document.close();
    newWin.print();
}
function simpanPilihanKeLocalStorage() {
    const pilihan = {
        baseMaterial: document.getElementById("baseMaterial").value,
        supportLayer: document.getElementById("supportLayer").value,
        comfortLayer: document.getElementById("comfortLayer").value,
        layerLast: document.getElementById("layerLast").value,
        additionalLayer: document.getElementById("additionalLayer").value,
        size: document.getElementById("size").value,
    };

    const totalPrice = document.getElementById("totalPrice").innerText;
    
    localStorage.setItem("pilihanKasur", JSON.stringify(pilihan));
    localStorage.setItem("totalPrice", totalPrice); // <--- ini penting ditambahkan
}
