import Storage from './storage'
import ru from '../lang/ru'
import en from '../lang/en'
import uk from '../lang/uk'

let langs = {}
let keys  = {}

let lang_default = 'ru'

Object.defineProperty(langs, 'ru', { get: ()=> ru })
Object.defineProperty(langs, 'uk', { get: ()=> uk })
Object.defineProperty(langs, 'en', { get: ()=> en })

Object.defineProperty(keys, 'ru', { get: ()=> 'Русский' })
Object.defineProperty(keys, 'uk', { get: ()=> 'Українська' })
Object.defineProperty(keys, 'en', { get: ()=> 'English' })

/**
 * Перевести
 * @param {string} name 
 * @param {string} custom_code - ru/en/uk...
 * @returns 
 */
function translate(name, custom_code){
    name = name + ''

    let code = custom_code || Storage.get('language','ru')

    if(!langs[code]) code = lang_default


    if(name.indexOf('#{') >= 0){
        return name.replace(/#{([a-z_0-9-]+)}/g, function(e,s){
            return langs[code][s] || langs[lang_default][s] || s
        })
    }
    else{
        return langs[code][name] || langs[lang_default][name] || name
    }
}

/**
 * Добавить переводы
 * @param {{key_name:{en:string,ru:string}}} data 
 */
function add(data){
    for(let name in data){
        for(let code in data[name]){
            if(langs[code]){
                langs[code][name] = data[name][code]
            }
        }
    }
}

/**
 * Добавить перевод для кода
 * @param {string} code 
 * @param {{key1:string,key2:string}} data 
 */
function AddTranslation(code, data){
    if(!langs[code]) langs[code] = {}

    for(let name in data){
        langs[code][name] = data[name]
    }
}

/**
 * Добавить коды
 * @param {{code_name:string}} new_codes 
 */
function addCodes(new_codes){
    for(let i in new_codes){
        keys[i]  = new_codes[i]
        langs[i] = {}
    }
}

/**
 * Получить список кодов
 * @returns {{ru:string,en:string}}
 */
function codes(){
    let all = {
        ru: keys.ru,
        uk: keys.uk,
        en: keys.en
    }

    for(let i in keys){
        all[i] = keys[i]
    }

    return all
}

export default {
    translate,
    add,
    codes,
    addCodes,
    AddTranslation
}