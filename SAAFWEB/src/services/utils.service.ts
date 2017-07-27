import { Injectable } from '@angular/core';
import { MlAreaSaafWeb } from './../enums/ml-area-saaf-web.enum';
import { MlBandeiraEmpresa } from './../enums/ml-bandeira-empresa.enum';
import { MlRegistroBase } from './../enums/ml-registro-base.enum';

@Injectable()
export class UtilsService {

  //variaveisglobais
  temaCss :string;


  constructor() { }

  private identidadesVisuaisDisponiveis: any[] = 
  [{id : "agathos", bandeira : "logoAgathosColor.svg", bandeirasemCor: "logoAgathos.svg", corNormal : "#931519", corEscura : "#76080C", temaCss : "agathos-theme"},
   {id : "objetivosorocaba", bandeira : "logoObjetivoSorocabaColor.svg", bandeirasemCor: "logoObjetivoSorocaba.svg",  corNormal : "#003C9B", corEscura : "#003C9B", temaCss : "objetivosor-theme"},
   {id : "anglo", bandeira : "logoAngloColor.svg", bandeirasemCor: "logoAnglo.svg", corNormal : "#4F513C", corEscura : "#4F513C", temaCss : "anglo-theme"},
   {id : "esamc", bandeira : "logoESAMCColor.svg", bandeirasemCor: "logoESAMC.svg", corNormal: "#1A2A3F", corEscura: "#1A2A3F", temaCss : "esamc-theme"},
   {id : "achievelanguages", bandeira : "logoAchieveLanguagesColor.svg", bandeirasemCor: "logoAchieveLanguages.svg", corNormal: "#003C9B", corEscura: "#003C9B", temaCss : "achievelanguages-theme"},
   {id : "insight", bandeira : "logoInsightColor.svg", bandeirasemCor: "logoInsight.svg", corNormal: "#5E4E86", corEscura: "#5E4E86", temaCss : "insight-theme"},
   {id : "progresso", bandeira : "logoProgressoColor.svg", bandeirasemCor: "logoProgresso.svg", corNormal: "#F8C301", corEscura: "#F8C301", temaCss : "progresso-theme"},
   {id : "novoanglo", bandeira : "logoNovoAngloColor.svg", bandeirasemCor: "logoNovoAnglo.svg", corNormal: "#084767", corEscura: "#084767", temaCss : "novoanglo-theme"},
   {id : "anglobaixada", bandeira : "logoAngloBaixadaColor.svg", bandeirasemCor: "logoAngloBaixada.svg", corNormal: "#013F5E", corEscura: "#013F5E", temaCss : "anglobaixada-theme"},
   {id : "centroeducobjetivo", bandeira: "logoCentroEducObjetivoColor.svg", bandeirasemCor: "logoCentroEducObjetivo.svg", corNormal: "#071E3B", corEscura: "#071E3B", temaCss : "centroeducobjetivo-theme"},
   {id : "sertec", bandeira: "logoSertecColor.svg", bandeirasemCor: "logoSertec.svg", corNormal: "#555555", corEscura: "#555555", temaCss : "sertec-theme"},
   {id : "tamandare", bandeira: "logoTamandareColor.svg", bandeirasemCor: "logoTamandare.svg", corNormal: "#D06802", corEscura: "#D06802", temaCss : "tamandare-theme"},
   {id : "angloitapetininga", bandeira: "logoAngloItapetiningaColor.svg", bandeirasemCor: "logoAngloItapetininga.svg", corNormal: "#084767", corEscura: "#084767", temaCss : "angloitapetininga-theme"},
   {id : "objetivo", bandeira: "logoObjetivoColor.svg", bandeirasemCor: "logoObjetivo.svg", corNormal: "#094AB2", corEscura: "#003C9B", temaCss : "objetivo-theme"}]
  ;

  ObterIdentidadeVisual(bandeira: string = "default"): any[] {

    return this.identidadesVisuaisDisponiveis.filter(identidade => identidade.id.toLowerCase() === bandeira.toLowerCase());

  }

   //******************************
  // */ Converter um enum para um array
  //***************************** */
  enumToArray(enumerador): any[]{

    let map:{codigo: number, nome: string}[] = [];

    for(var n in enumerador){
        if(typeof enumerador[n] === 'number'){
          map.push({codigo: <any>enumerador[n], nome: n});
        }
    }

    return map;
  }

  //**************************************
  // Capitalizar a primeira letra de uma string */
  //************************************** */
  capitalizarString(valor: string) : string{
      return valor.charAt(0).toUpperCase() + valor.slice(1);
  }

  //**********************************  */
  //****Retornar um array filtrado com base em um termo de pesquisa. */
  //********************************* */
  pesquisarnoArray(value: string, array: any[]): any[]{
    return array.filter(item => item.nome.toLowerCase() === value.toLowerCase());
  }

  //***************************** */
  //******Retornando as áreas)** */
  //*************************** */

  ObterAreasSaafWeb(){
    return this.enumToArray(MlAreaSaafWeb);
  }

  ObterBandeirasEmpresas(){
    return this.enumToArray(MlBandeiraEmpresa);
  }

  ObterRegistroBases(){
    return this.enumToArray(MlRegistroBase);
  }




}
