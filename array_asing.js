// # mean
// # x = [3,4,5,1,7,2]
// # a =3+4+5+1+7+2
// # print(a)

// # 22
// # a=(22/6)
// # print(a)

// 6 number
var list = [3,6,7,8,5,10];
var s =12;
for (i in list){
    for (j in list){
        if ((list[i] +list[j]==s) && (list[i] !=list[j])){
            console.log(list[i],list[j]);
            list.splice(i,1);
        }
    }
}




