import { getUserQuestionnaire } from "./db_mongo"
import sql from "./db"
import { getRecomendations } from "./db_neon"
export async function makeSuggestion(id:string){
    let questionnaire = await getUserQuestionnaire(id)
    let intrests = questionnaire.get("intrests")
    let risk = questionnaire.get("risk")
    let length = questionnaire.get("length")
    let recomendations = getRecomendations(intrests,risk,length,10)



}