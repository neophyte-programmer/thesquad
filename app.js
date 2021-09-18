let data = [
    {
        name: 'Elvis',
        age: '23'
    },
    {
        name: 'Nutifafa',
        age: '18'
    },
    {
        name: 'Eugene',
        age: '19'
    },
    {
        name: 'Faustina',
        age: '20'
    },
    {
        name: 'Adelaide',
        age: '19'
    },
    {
        name: 'Cyrese',
        age: '19'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' is ' + item.age + ' years old. ' + '</div>';
});

info.innerHTML = details.join('\n');