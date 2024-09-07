const pratos = {
    "Afeganistão": {
        prato: "Kabuli Pulao",
        descricao: "Um prato de arroz temperado com passas, cenouras e cordeiro, com influências vindas da Pérsia.",
        influencia: "A rota da seda trouxe ingredientes como a cenoura e temperos como o açafrão, enriquecendo a culinária afegã."
    },
    "África do Sul": {
        prato: "Bobotie",
        descricao: "Carne moída temperada assada com uma crosta de ovo, mostrando a influência das culinárias holandesa e indonésia.",
        influencia: "Trazido pelos colonizadores holandeses no século XVII, o bobotie incorpora ingredientes locais e especiarias trazidas pelos escravos da Indonésia."
    },
    "Alemanha": {
        prato: "Chucrute",
        descricao: "Repolho fermentado, um acompanhamento popular na culinária alemã, com raízes antigas.",
        influencia: "O chucrute tem origem na China antiga, chegando à Europa através de tribos nômades. Tornou-se um alimento básico na Alemanha por sua longa conservação."
    },
    "Argentina": {
        prato: "Asado",
        descricao: "Churrasco de carnes variadas, um prato icônico da cultura argentina, com influências espanholas e indígenas.",
        influencia: "O asado tem raízes na tradição gaúcha, com influência dos pampas argentinos. A técnica de assar carne em fogo aberto é compartilhada com diversas culturas sul-americanas."
    },
    "Austrália": {
        prato: "Meat Pie",
        descricao: "Torta de carne bovina picada com molho, um prato popular com raízes britânicas.",
        influencia: "A colonização britânica na Austrália deixou uma forte influência na culinária. A meat pie é um exemplo de prato tradicional inglês adaptado com ingredientes locais."
    },
    "Brasil": {
        prato: "Feijoada",
        descricao: "Cozido de feijão preto com carnes, acompanhado de arroz e farofa. Um exemplo da fusão de culturas.",
        influencia: "Tem origens nas práticas culinárias de Portugal e África, incorporando ingredientes do Brasil indígena."
    },
    "Canadá": {
        prato: "Poutine",
        descricao: "Batatas fritas cobertas com queijo coalho e molho, um prato popular com raízes na província de Quebec.",
        influencia: "A poutine é um prato relativamente recente, que surgiu em Quebec na década de 1950. É um exemplo da criatividade da culinária canadense."
    },
    "Chile": {
        prato: "Empanadas",
        descricao: "Pasteis assados ou fritos, recheados com carne, queijo, frutos do mar ou outros ingredientes, um prato popular com influências espanholas.",
        influencia: "As empanadas são populares em toda a América Latina, com variações nos recheios e preparos. No Chile, as empanadas de pino, recheadas com carne, azeitonas e ovo cozido, são as mais tradicionais."
    },
    "China": {
        prato: "Pato de Pequim",
        descricao: "Prato elaborado que consiste em pato assado com pele crocante, servido com panquecas finas, cebolinha e molho hoisin.",
        influencia: "O Pato de Pequim é um prato icônico da culinária chinesa, com séculos de história. Representa a sofisticação e a tradição da culinária imperial."
    },
    "Colômbia": {
        prato: "Bandeja Paisa",
        descricao: "Prato farto que inclui feijão vermelho, arroz branco, carne moída, ovo frito, banana frita, chouriço e avocado.",
        influencia: "A Bandeja Paisa é um prato tradicional da região andina da Colômbia. Representa a riqueza e a variedade da culinária local, combinando ingredientes de diferentes origens."
    },
    "Coreia do Sul": {
        prato: "Bibimbap",
        descricao: "Tigela de arroz com carne, vegetais, ovo e molho gochujang, um prato colorido e saboroso da culinária coreana.",
        influencia: "O bibimbap é um prato popular na Coreia do Sul. Representa o equilíbrio e a harmonia da culinária coreana, combinando sabores e texturas diferentes."
    },
    "Costa Rica": {
        prato: "Gallo Pinto",
        descricao: "Arroz e feijão misturados, geralmente servidos no café da manhã, um prato tradicional com influências latino-americanas.",
        influencia: "O gallo pinto é um prato popular na Costa Rica e em outros países da América Central. É um café da manhã farto e saboroso, que reflete a mistura de culturas na região."
    },
    "Croácia": {
        prato: "Pašticada",
        descricao: "Ensopado de carne marinado em vinho tinto e especiarias, geralmente servido com nhoque, um prato tradicional com influências da culinária mediterrânea.",
        influencia: "A pašticada é um prato tradicional da região da Dalmácia, na Croácia. Reflete a influência italiana na culinária local, com o uso de vinho tinto e especiarias."
    },
    "Cuba": {
        prato: "Ropa Vieja",
        descricao: "Carne desfiada cozida em um molho de tomate, pimentão e cebola, um prato nacional com raízes espanholas.",
        influencia: "A ropa vieja é um prato tradicional cubano com origens nas Ilhas Canárias, na Espanha. A receita foi trazida para Cuba pelos imigrantes canários."
    },
    "Dinamarca": {
        prato: "Smørrebrød",
        descricao: "Fatias de pão de centeio com diferentes coberturas, como arenque em conserva, carne assada ou ovo cozido.",
        influencia: "O smørrebrød é um prato tradicional dinamarquês que reflete a cultura de comida caseira do país. As coberturas variam de acordo com a região e a estação do ano."
    },
    "Egito": {
        prato: "Koshari",
        descricao: "Prato vegetariano feito com arroz, macarrão, lentilhas, grão de bico e molho de tomate, um prato nacional com raízes egípcias.",
        influencia: "O koshari é um prato popular no Egito, com origens no século XIX. É uma refeição completa e acessível, que combina carboidratos, proteínas e legumes."
    },
    "Espanha": {
        prato: "Paella",
        descricao: "Arroz cozido com frutos do mar, frango, coelho ou legumes, um prato icônico da culinária espanhola.",
        influencia: "A paella tem origem na região de Valência, na Espanha. É um prato versátil, que pode ser adaptado a diferentes ingredientes."
    },
    "Estados Unidos": {
        prato: "Hambúrguer",
        descricao: "Sanduíche de carne moída em um pão com gergelim, um prato popular com raízes alemãs, mas que se tornou um símbolo da cultura americana.",
        influencia: "O hambúrguer tem origem controversa, mas acredita-se que tenha sido trazido por imigrantes alemães para os Estados Unidos no final do século XIX. A popularização do hambúrguer reflete a cultura fast-food americana."
    },
    "Etiópia": {
        prato: "Wat",
        descricao: "Guisado picante geralmente servido com injera, um prato tradicional com influências africanas.",
        influencia: "O wat é um prato tradicional da Etiópia, com variações nos ingredientes e preparos. O uso de especiarias como berbere e cardamomo é típico da culinária etíope."
    },
    "Filipinas": {
        prato: "Adobo",
        descricao: "Frango ou carne de porco cozidos em molho de soja, vinagre, alho e pimenta-do-reino, um prato nacional com influências espanholas.",
        influencia: "O adobo é um prato tradicional das Filipinas, com raízes na culinária indígena. A palavra 'adobo' vem do espanhol 'adobar', que significa 'marinar'. A influência espanhola se reflete no uso de ingredientes como soja e vinagre."
    },
    "Finlândia": {
        prato: "Karjalanpiirakat",
        descricao: "Tortas de centeio com recheio de arroz ou purê de batata, um prato tradicional com raízes na região da Carélia.",
        influencia: "O karjalanpiirakat é um prato tradicional da Finlândia, com origens na região da Carélia. É um prato popular em todo o país, geralmente servido com manteiga."
    },
    "França": {
        prato: "Boeuf Bourguignon",
        descricao: "Ensopado de carne cozido em vinho tinto da Borgonha, com cogumelos e bacon, um prato clássico da culinária francesa.",
        influencia: "O boeuf bourguignon é um prato tradicional da região da Borgonha, na França. Representa a rica tradição culinária francesa, com o uso de ingredientes de alta qualidade e técnicas de cozimento elaboradas."
    },
    "Grécia": {
        prato: "Moussaka",
        descricao: "Gratinado de berinjela, carne moída e molho bechamel, um prato clássico da culinária grega.",
        influencia: "A moussaka é um prato popular na Grécia e em outros países dos Balcãs. A origem do prato é incerta, mas acredita-se que tenha sido influenciado pela culinária otomana."
    },
    "Guatemala": {
        prato: "Pepián",
        descricao: "Guisado espesso e saboroso feito com carne, frutas secas, especiarias e sementes torradas.",
        influencia: "O pepián é um prato tradicional da Guatemala, com raízes na culinária maia. É um prato festivo, geralmente servido em ocasiões especiais."
    },
    "Holanda": {
        prato: "Stamppot",
        descricao: "Purê de batata com vegetais, como couve, cenoura ou cebola, geralmente servido com salsicha.",
        influencia: "O stamppot é um prato tradicional holandês, típico da culinária caseira do país. Reflete a importância da batata e dos vegetais na culinária holandesa."
    },
    "Honduras": {
        prato: "Baleadas",
        descricao: "Tortilhas de farinha recheadas com feijão, queijo e outros ingredientes, como ovo, abacate ou carne.",
        influencia: "As baleadas são um alimento popular em Honduras. É um prato versátil, que pode ser adaptado a diferentes gostos e ingredientes."
    },
    "Hungria": {
        prato: "Goulash",
        descricao: "Sopa ou ensopado de carne com páprica, cebola e outros vegetais, um prato nacional com raízes húngaras.",
        influencia: "O goulash é um prato tradicional da Hungria. A páprica é um ingrediente essencial, que confere ao prato sua cor e sabor característicos."
    },
    "Índia": {
        prato: "Biryani",
        descricao: "Prato de arroz com especiarias, carne, vegetais e ervas aromáticas, originário do subcontinente indiano.",
        influencia: "O biryani é um exemplo da rica e diversa culinária indiana, com influências mogóis e persas. Sua popularidade se espalhou por todo o mundo."
    },
    "Indonésia": {
        prato: "Nasi Goreng",
        descricao: "Arroz frito com especiarias, legumes, ovo frito e, opcionalmente, carne ou frutos do mar.",
        influencia: "O nasi goreng é um prato popular na Indonésia e em outros países do sudeste asiático. É um prato versátil e saboroso, que pode ser adaptado a diferentes gostos e ingredientes."
    },
    "Itália": {
        prato: "Pizza",
        descricao: "Massa fina coberta com molho de tomate, queijo e diversos ingredientes. Um ícone da culinária italiana, com raízes em diferentes culturas.",
        influencia: "A pizza moderna tem influências de imigrantes gregos (queijo), árabes (temperos) e espanhóis (tomate)."
    },
    "Japão": {
        prato: "Sushi",
        descricao: "Arroz temperado com vinagre, acompanhado de peixe cru, frutos do mar ou vegetais. Um prato milenar com forte tradição.",
        influencia: "O sushi tem origem no sudeste asiático, chegando ao Japão por volta do século VIII. A técnica de fermentação utilizada inicialmente foi sendo modificada ao longo dos anos."
    },
    "México": {
        prato: "Tacos",
        descricao: "Tortilhas de milho ou trigo dobradas ou enroladas em torno de um recheio, como carne, queijo, feijão, vegetais e molhos.",
        influencia: "Os tacos têm raízes profundas na cultura mexicana, com evidências de consumo desde a época pré-hispânica. Sua versatilidade e sabor os tornaram populares em todo o mundo."
    },
    "Portugal": {
        prato: "Bacalhau à Brás",
        descricao: "Prato feito com bacalhau desfiado, batatas fritas finas, ovos mexidos e azeitonas pretas, uma iguaria tradicional portuguesa.",
        influencia: "O bacalhau à Brás é um exemplo da culinária portuguesa, rica em frutos do mar e com influências históricas. O uso do bacalhau salgado está ligado às grandes navegações."
    },
    "Rússia": {
        prato: "Pelmeni",
        descricao: "Pequenas trouxinhas de massa recheadas com carne, geralmente servidas com creme azedo ou manteiga derretida.",
        influencia: "O pelmeni é um prato tradicional da culinária russa, com influências da Ásia Central. É um prato reconfortante e saboroso, geralmente consumido durante os meses frios."
    }
};

function mostrarPrato() {
    const paisSelecionado = document.getElementById("pais-select").value;
    const resultado = document.getElementById("resultado");

    if (paisSelecionado) {
        const prato = pratos[paisSelecionado];
        resultado.innerHTML = `
            <h2>${prato.prato}</h2>
            <p>${prato.descricao}</p>
            <p class="influencia"><strong>Influência Cultural:</strong> ${prato.influencia}</p>
        `;
    } else {
        resultado.innerHTML = "<p>Selecione um país para explorar sua culinária!</p>";
    }
}

const selectPais = document.getElementById("pais-select");
for (const pais in pratos) {
    const option = document.createElement("option");
    option.value = pais;
    option.text = pais;
    selectPais.appendChild(option);
}

