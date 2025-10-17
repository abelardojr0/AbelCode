export const dbMap = {
  branca: () => import("./branca.json"),
  preta: () => import("./preta.json"),
  rainbow: () => import("./rainbow.json"),
  arte_cultura: () => import("./arte e cultura.json"),
  conhecimento_historia: () => import("./conhecimento e historia.json"),
  entretenimento_tv: () => import("./entretenimento e tv.json"),
  fantasia_crenca: () => import("./fantasia e crença.json"),
  internet_fama: () => import("./internet e fama.json"),
  mundo_esporte: () => import("./mundo dos esportes.json"),
  mundo_nerd: () => import("./mundo nerd.json"),
  animes: () => import("./animes.json"),
};
