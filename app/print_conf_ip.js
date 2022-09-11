/*
  Define format & output data 
*/
conf ={
    //config printer 
    "device": {
        "ip": "192.168.11.205", //BA400 printer IP address       
        "port": "9100" // ... port number
    },
    //Initial setting label size
    "setLabel": {
        "pitch": "0830",
        "width": "1057",
        "hight": "0750"
    },
    //Format configration
    "setFormat": {
        "bufferClear": "True",
        //PC: Image font formatting
        "PC": [
            {
                "number": "001",
                "x": "0035",
                "y": "0090",
                "xR": "15",
                "yR": "15",
                "fontType": "K",
                "fontSpace": "00",
                "fontDeco": "B"
            },
            {
                "number": "002",
                "x": "0500",
                "y": "0070",
                "xR": "1",
                "yR": "1",
                "fontType": "i",
                "fontSpace": "00",
                "fontDeco": "B"
            },
            {
                "number": "003",
                "x": "0035",
                "y": "0150",
                "xR": "1",
                "yR": "1",
                "fontType": "j",
                "fontSpace": "00",
                "fontDeco": "B",
                //align | autoLineFeed
                //"align": "", //1:left 2:center 3:right
                "autoLineFeed": {
                    "width": "0430",
                    "pitch": "045",
                    "rowMax": "02"
                }
            }
        ],
        //Bar code setting
        "XB_QR": [
            {
                "number": "01",
                "x": "0510",
                "y": "0100",
                "errorLevel": "M", //L,M,Q,H
                "cellSize": "07", //00～52
                "mode": "A", //M,A
                "rotation": "0", //0,1,2,3
                "model": "M2" //1,2,3
            }
        ],
        "XB_BAR": [
            {
                "number": "02",
                "x": "0035",
                "y": "0200",
                "type": "9", //0,5,6,7,8,9,A......
                "digit": "3", //1-5
                "width": "05", //01-15
                "rotation": "0", // 0-3
                "height": "0100", //0000-1000
                "outNumber": "1",
                "zeroSup": "00" //zero suppress 
            }
        ]
    },
    "fields": [
        {
            "command": "RC",
            "number": "001",
            "bind": "scode",
            "default": "14687-1"
        },
        {
            "command": "RC",
            "number": "002",
            "bind": "datePerson",
            "default": "2020/12/22 田中"
        },
        {
            "command": "RC",
            "number": "003",
            "bind": "title",
            "default": "コンバインAA580 58馬力 クボタ 3条刈 自動水平"
        },
        {
            "command": "RB",
            "number": "01",
            "bind": "qrData",
            "default": "https://www.google.com/search?q=%E9%A3%9B%E8%A1%8C%E8%88%B9"
        },
        {
            "command": "RB",
            "number": "02",
            "bind": "scode",
            "default": "12345-1"
        },
        {
            "command": "XS",
            "copies": "0001",
            "cutInterval": "000",
            "censorType": "2", //0-4
            "mode": "C", //C,D,E
            "speed": "2", //2,4,6,8
            "ribbon": "2", //0,1,2
            "tagRotation": "0",
            "statusResponse": "0" //0,1
        }
    ],
    "data":[
        {
            "scode": "14687-1",
            "datePerson": "2020/12/22 田中",
            "title": "コンバインAA580 58馬力 クボタ 3条刈 自動水平",
            "qrData": "https://www.google.com/search?q=%E9%A3%9B%E8%A1%8C%E8%88%B9"            
        },
        {
            "scode": "14687-2",
            "datePerson": "2020/12/22 佐藤",
            "title": "トラクターBB999 30馬力 ヤンマー 自動水平",
            "qrData": "https://www.google.com/search?q=%E9%A3%9B%E8%A1%8C%E8%88%B9"            
        }
    ],
    "final": [
        {
            "command": "IB"
        }
    ]
}

console.log(conf)

console.log(conf.setFormat.PC[0])