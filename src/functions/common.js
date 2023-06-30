export function Unique(length = 30) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export const IsObjectEmpty = (obj) => {
    if (obj !== null)
        return Object.keys(obj).length === 0
    return true
}


export const CalculateSkillLevel = (skillLevel) => {
    switch (skillLevel) {
        case 'starter':
            return 30
        case 'intermediate':
            return 50
        case 'advanced':
            return 70
        case 'expert':
            return 100
        default:
            return 5
    }
}