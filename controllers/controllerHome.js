 export function captureEnergyConsumption() {
    let consumption = document.getElementById('consumption').value
    calculateEnergycost(parseInt(consumption))
}
function calculateEnergycost(consumption) {
    if (consumption <= 100) {
        var costByKwh = 150
    } else if (consumption > 100 && consumption <= 300) {
        var costByKwh = 200
    }else {
        var costByKwh = 250
    }
    let totalPrice = consumption * costByKwh;
    showEnergyCost(consumption, totalPrice)
}
function showEnergyCost(consumption, totalPrice) {
    alert(`El precio total por ${consumption} Kwh consumidos es: ${totalPrice}$`)
}
