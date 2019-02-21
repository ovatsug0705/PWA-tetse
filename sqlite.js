let db = openDatabase('dbTeste', '1.0', "Fisrt database", 2 * 1024 * 1024);

db.transaction((tx)=>{
    tx.executeSql('create table if not exists teste(id integer primary key, name text)');
})

var fisrtId = 0;
var lastId = 0;

//selecionando índices
function indices() {
    db.transaction((tx)=>{
        tx.executeSql('select * from teste', [], (tx, res)=>{
            let tamanho = res.rows;
            fisrtId = tamanho[0].id;
            console.log("fisrtId: ", fisrtId);
            lastId = tamanho[tamanho.length - 1].id;
            console.log("lastId: ", lastId);
        });
    })
}
indices();

function addData() {

    let data = "number_" + Math.round(Math.random() * 10);

    db.transaction((tx)=>{
        tx.executeSql('insert into teste (name) values (?)', [data]);
    })

    alert('Adicionou!');
}

function listData() {

    db.transaction((tx)=>{
        tx.executeSql('select * from teste', [], (tx, res)=>{
            //rows - propriedade do objeto de resposta res
            let batata = res.rows;
            let str = '';

            for(let i = 0; i < batata.length; i++){
                str += ('id: ' + batata[i].id +  ' - valor: ' +  batata[i].name + '\n');
            }

            alert("Resultados: \n" + str);
        });
    })
}

function updateData() {
    let data = "vanisvaldo" + Math.round(Math.random() * 10);

    db.transaction((tx)=>{
        tx.executeSql('update teste set name=? where id=?', [data, fisrtId]);
        alert("atualizou!");
    })
}

function removeData() {
    indices();
    db.transaction((tx)=>{
        tx.executeSql('delete from teste where id=?', [lastId]);
        alert("deletou!");
    })
}