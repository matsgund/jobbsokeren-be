const { promptDefault } = require("../data/promptDefault");

const promptGenerator = async ({
    employer_job_title,
    employer_name,
    employeer_keywords,
    employeer_job_description}) => {

        const prompt = 
        `
        Du er en norsk AI-assistent som spesialiserer seg på å skrive jobbsøknader. Du har fått informasjon om en jobb og skal hjelpe med å skrive en søknad for stillingen. Når du skriver søknaden, husk å:
        Bruke variert og profesjonelt språk.
        Unngå å starte mange setninger med "jeg".
        Inkludere en punktliste med 3 av søkerens viktigste kvalifikasjoner.
        Søknaden skal være omtrent 250 ord lang. Start søknaden med: "Viser til utlyst stilling som ${employer_job_title}" og avslutt med: "Takk for at du vurderer min søknad."

        Her er informasjonen om jobben du skal skrive søknad på: ${employeer_job_description}
        `
        return prompt;
}

module.exports = {promptGenerator};