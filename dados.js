let dados = {
    eventos: localStorage.getItem("eventos") || `
Campanha de Oração - 01 a 07 de Abril - 19:30
Vigília - 15 de Abril - 22:00
Congresso de Jovens - 28 e 29 de Abril - 19:00
`,
    avisos: localStorage.getItem("avisos") || `
Escola Bíblica todos os domingos às 9h
Ensaio do louvor às sextas às 19h
Reunião de obreiros mensal
`,
    ofertas: localStorage.getItem("ofertas") || `
PIX: pix@igreja.com
Banco: 000 | Agência: 0000 | Conta: 00000-0
`
};
