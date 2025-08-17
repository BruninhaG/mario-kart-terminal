const readline = require('readline-sync');

console.log('🎮 Bem-vindo ao Mario Kart Terminal Edition! 🎮');

const personagens = ['Mario', 'Luigi', 'Peach', 'Yoshi'];
console.log('Escolha seu personagem:');
personagens.forEach((p,i)=>console.log(`${i+1}. ${p}`));
const escolha = readline.questionInt('Digite o número do personagem: ') - 1;
const jogador = personagens[escolha];

console.log(`👉 Você escolheu: ${jogador}`);

const competidores = personagens.filter(p=>p!==jogador);
competidores.unshift(jogador);

let posicoes = {};
competidores.forEach(p=>posicoes[p]=0);

const itens = ['🍌 Casca de Banana', '🎯 Carapaça Verde', '💨 Cogumelo'];

console.log('\n🏁 Corrida começou! 🏁');

for(let rodada=1;rodada<=5;rodada++){
  console.log(`\n--- Rodada ${rodada} ---`);
  competidores.forEach(p=>{
    if(Math.random()<0.3){
      const item = itens[Math.floor(Math.random()*itens.length)];
      console.log(`${p} encontrou um ${item}.`);
      if(item.includes('Cogumelo')) posicoes[p]+=4;
    }else{
      const avanco = Math.floor(Math.random()*3)+1;
      posicoes[p]+=avanco;
      console.log(`${p} avançou ${avanco} casas.`);
    }
  });
}

console.log('\n🏆 Corrida terminada! Resultado final:');
const ranking = Object.entries(posicoes).sort((a,b)=>b[1]-a[1]);
ranking.forEach(([nome,pontos],i)=>console.log(`${i+1}º lugar: ${nome} (${pontos} casas)`));