
const axios = require('axios');

const url = "https://www.hepsiburada.com/vestel-venus-v3-5580-vestel-garantili-p-HBV000003K73J-yorumlari?filtre=2"

axios.get(url).then(data => console.log(data))