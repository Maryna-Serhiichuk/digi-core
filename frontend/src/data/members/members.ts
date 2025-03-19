import { memberPhoto } from "./members-photos"

const members: Array<MemberType> = [
    { id: '1', fullName: "Ethan Carter", position: "CEO Of HealthTech", photo: memberPhoto?.EthanCarter },
    { id: '2', fullName: "Olivia Bennett", position: "CTO of Technology", photo: memberPhoto?.OliviaBennett },
    { id: '3', fullName: "Noah Mitchell", position: "Head of Design", photo: memberPhoto?.NoahMitchell },
    { id: '4', fullName: "James Anderson", position: "Lead Web Developer", photo: memberPhoto?.JamesAnderson },
    { id: '5', fullName: "Sophia Collins", position: "Lead Backend Developer", photo: memberPhoto?.SophiaCollins },
    { id: '6', fullName: "Liam Harris", position: "Software Engineer", photo: memberPhoto?.LiamHarris },
    { id: '7', fullName: "Ava Richardson", position: "Frontend Developer", photo: memberPhoto?.AvaRichardson },
    { id: '8', fullName: "Mason Walker", position: "Backend Developer", photo: memberPhoto?.MasonWalker },
    { id: '9', fullName: "Emma Scott", position: "Mobile Developer", photo: memberPhoto?.EmmaScott },
    { id: '10', fullName: "Benjamin Parker", position: "UI/UX Designer", photo: memberPhoto?.BenjaminParker },
    { id: '11', fullName: "Chloe Davis", position: "Graphic Designer", photo: memberPhoto?.ChloeDavis },
    { id: '12', fullName: "Lucas Reed", position: "QA Engineer", photo: memberPhoto?.LucasReed },
    { id: '13', fullName: "Grace White", position: "Security Engineer", photo: memberPhoto?.GraceWhite },
    { id: '14', fullName: "Henry Lewis", position: "DevOps Engineer", photo: memberPhoto?.HenryLewis },
    { id: '15', fullName: "Amelia Hall", position: "Cloud Engineer", photo: memberPhoto?.AmeliaHall },
    { id: '16', fullName: "Daniel Adams", position: "Data Scientist", photo: memberPhoto?.DanielAdams },
    { id: '17', fullName: "Matthew Cooper", position: "Business Analyst", photo: memberPhoto?.MatthewCooper },
    { id: '18', fullName: "William Thompson", position: "Sales Manager", photo: memberPhoto?.WilliamThompson },
    { id: '19', fullName: "Charlotte Evans", position: "Customer Support", photo: memberPhoto?.CharlotteEvans },
    { id: '20', fullName: "Jack Wilson", position: "HR Manager", photo: memberPhoto?.JackWilson }
];

export const getMember = (id: string): MemberType => {
    return members?.find(member => member?.id === id) ?? members[0]
}

export const getMembers = (ids: string[]): MemberType[] => {
    return members?.filter(member => ids?.includes(member?.id))
}