var db_pid=$vm.module_list[$vm.vm["__ID"].name].table_id;
var rid;
//--------------------------------------------------------
$('#D__ID').on('load',function(){
    $("#F__ID")[0].reset();
    $('#submit__ID').hide();
    load_data();
})
//--------------------------------------------------------
var load_data=function(){
    rid='';
    var req={cmd:"query_records_s2",db_pid:db_pid,fields:"ID,Information"};
    $VmAPI.request({data:req,callback:function(res){
        if(res.records.length==1){
            rid=res.records[0].ID;
            $.each(res.records[0], function(name, value){
                var $el = $('#F__ID *[name='+name+']');
                var type = $el.attr('type');
                switch(type){
                    case 'checkbox':
                        if(value!='off') $el.attr('checked', true);
                        else $el.attr('checked', false);
                        break;
                    case 'radio':
                        $('input[name="' + name+ '"][value="' + value + '"]').prop('checked', true);
                        break;
                    default:
                        $el.val(value);
                }
            });
        }
        $('#submit__ID').show();
    }});
}
//--------------------------------------------------------
$('#F__ID').submit(function(event){
    //--------------------------------------------------------
    event.preventDefault();
    $('#submit__ID').hide();
    //if(alert_validation!="") {$vm.alert(alert_validation); return false;}
    var module_name=$vm.vm["__ID"].name;
    var db_pid=$vm.module_list[module_name].table_id
    if(module_name=='first-visit_ess'){
        $('#ESS__ID').val(parseInt($("input[name='ESS_1']:checked").val())+parseInt($("input[name='ESS_2']:checked").val())+parseInt($("input[name='ESS_3']:checked").val())+parseInt($("input[name='ESS_4']:checked").val())+parseInt($("input[name='ESS_5']:checked").val())+parseInt($("input[name='ESS_6']:checked").val())+parseInt($("input[name='ESS_7']:checked").val())+parseInt($("input[name='ESS_8']:checked").val()))
    }
    if(module_name=='first-visit_dass'){
        $('#DASS_DS__ID').val((parseInt($("input[name='DASS_3']:checked").val())+parseInt($("input[name='DASS_5']:checked").val())+parseInt($("input[name='DASS_10']:checked").val())+parseInt($("input[name='DASS_13']:checked").val())+parseInt($("input[name='DASS_16']:checked").val())+parseInt($("input[name='DASS_17']:checked").val())+parseInt($("input[name='DASS_21']:checked").val()))*2);
        $('#DASS_AS__ID').val((parseInt($("input[name='DASS_2']:checked").val())+parseInt($("input[name='DASS_4']:checked").val())+parseInt($("input[name='DASS_7']:checked").val())+parseInt($("input[name='DASS_9']:checked").val())+parseInt($("input[name='DASS_15']:checked").val())+parseInt($("input[name='DASS_19']:checked").val())+parseInt($("input[name='DASS_20']:checked").val()))*2);
        $('#DASS_SS__ID').val((parseInt($("input[name='DASS_1']:checked").val())+parseInt($("input[name='DASS_6']:checked").val())+parseInt($("input[name='DASS_8']:checked").val())+parseInt($("input[name='DASS_11']:checked").val())+parseInt($("input[name='DASS_12']:checked").val())+parseInt($("input[name='DASS_14']:checked").val())+parseInt($("input[name='DASS_18']:checked").val()))*2);
    }
    if(module_name=='first-visit_isi'){
        $('#ISI__ID').val((parseInt($("input[name='ISI_2']:checked").val())+parseInt($("input[name='ISI_3']:checked").val())+parseInt($("input[name='ISI_4']:checked").val())+parseInt($("input[name='ISI_5']:checked").val())+parseInt($("input[name='ISI_1a']:checked").val())+parseInt($("input[name='ISI_1b']:checked").val())+parseInt($("input[name='ISI_1c']:checked").val())));
        $('#ISI_1__ID').val((parseInt($("input[name='ISI_1a']:checked").val())+parseInt($("input[name='ISI_1b']:checked").val())+parseInt($("input[name='ISI_1c']:checked").val())));
    }

    if(module_name=='first-visit_fss'){
        $('#fss__ID').val((parseInt($("input[name='fss_1']:checked").val())+parseInt($("input[name='fss_2']:checked").val())+parseInt($("input[name='fss_3']:checked").val())+parseInt($("input[name='fss_4']:checked").val())+parseInt($("input[name='fss_5']:checked").val())+parseInt($("input[name='fss_6']:checked").val())+parseInt($("input[name='fss_7']:checked").val())+parseInt($("input[name='fss_8']:checked").val())+parseInt($("input[name='fss_9']:checked").val())));
    }
    if(module_name=='first-visit_psqi'){
        record={}
        record.PSQI1=$("input[name='PSQI1']").val();
        record.PSQI2=$("input[name='PSQI2']").val();
        record.PSQI3=$("input[name='PSQI3']").val();
        record.PSQI4=$("input[name='PSQI4']").val();
        record.PSQI5j=$("input[name='PSQI5j']").val();
        record.PSQI5a=$("input[name='PSQI5a']:checked").val();
        record.PSQI5b=$("input[name='PSQI5b']:checked").val();
        record.PSQI5c=$("input[name='PSQI5c']:checked").val();
        record.PSQI5d=$("input[name='PSQI5d']:checked").val();
        record.PSQI5e=$("input[name='PSQI5e']:checked").val();
        record.PSQI5f=$("input[name='PSQI5f']:checked").val();
        record.PSQI5g=$("input[name='PSQI5g']:checked").val();
        record.PSQI5h=$("input[name='PSQI5h']:checked").val();
        record.PSQI5i=$("input[name='PSQI5i']").val();
        record.PSQI5ji=$("input[name='PSQI5ji']:checked").val();
        record.PSQI5d=$("input[name='PSQI4']").val();
        record.PSQI6=$("input[name='PSQI6']:checked").val();
        record.PSQI7=$("input[name='PSQI7']:checked").val();
        record.PSQI8=$("input[name='PSQI8']:checked").val();
        record.PSQI9=$("input[name='PSQI9']:checked").val();
        var vpsqi1=0;
        var v4=parseFloat(record.PSQI4);
        if(v4>=7) vpsqi1=0;
        if(v4<7 && v4>=6) vpsqi1=1;
        if(v4<6 && v4>=5) vpsqi1=2;
        if(v4<5) vpsqi1=3;
        record.PSQIDURAT=vpsqi1.toString();
        var pqsi5j="0";
        if(record.PSQI5j=='') pqsi5j="0"; else pqsi5j=record.PSQI5ji;
        var vpsqi2=parseInt(record.PSQI5b)+parseInt(record.PSQI5c)+parseInt(record.PSQI5d)+parseInt(record.PSQI5e)+parseInt(record.PSQI5f)+parseInt(record.PSQI5g)+parseInt(record.PSQI5h)+parseInt(record.PSQI5i)+parseInt(pqsi5j);
        if(vpsqi2==0) record.PSQIDISTB="0";
        if(vpsqi2>=1 && vpsqi2<=9) record.PSQIDISTB="1";
        if(vpsqi2>9 && vpsqi2<=18) record.PSQIDISTB="2";
        if(vpsqi2>18) record.PSQIDISTB="3";

        var vpsqi3=0;
        var v2=parseInt(record.PSQI2)
        if(v2>=0 && v2<=15) vpsqi3=0;
        if(v2>15 && v2<=30) vpsqi3=1;
        if(v2>30 && v2<=60) vpsqi3=2;
        if(v2>60) vpsqi3=3;
        var v5i=parseInt(record.PSQI5a)
        if((vpsqi3+v5i)==0) record.PSQILATEN="0";
        if((vpsqi3+v5i)>=1 && (vpsqi3+v5i)<=2) record.PSQILATEN="1";
        if((vpsqi3+v5i)>=3 && (vpsqi3+v5i)<=4) record.PSQILATEN="2";
        if((vpsqi3+v5i)>=5 && (vpsqi3+v5i)<=6) record.PSQILATEN="3";

        var v18i=parseInt(record.PSQI8)
        var v19i=parseInt(record.PSQI9)
        if((v18i+v19i)==0) record.PSQIDAYDYS="0";
        if((v18i+v19i)>=1 && (v18i+v19i)<=2) record.PSQIDAYDYS="1";
        if((v18i+v19i)>=3 && (v18i+v19i)<=4) record.PSQIDAYDYS="2";
        if((v18i+v19i)>=5 && (v18i+v19i)<=6) record.PSQIDAYDYS="3";

        var startTime = record.PSQI1;
        var endTime = record.PSQI3;

        var startTimeArray = startTime.split(":");
        var startInputHrs = parseInt(startTimeArray[0]);
        var startInputMins = parseInt(startTimeArray[1]);

        var endTimeArray = endTime.split(":");
        var endInputHrs = parseInt(endTimeArray[0]);
        var endInputMins = parseInt(endTimeArray[1]);

        var startMin = startInputHrs*60 + startInputMins;
        var endMin = endInputHrs*60 + endInputMins;

        var result;

        if (endMin < startMin) {
           var minutesPerDay = 24*60;
           result = minutesPerDay - startMin;  // Minutes till midnight
           result += endMin; // Minutes in the next day
        } else {
          result = endMin - startMin;
        }
        var v4=parseInt(record.PSQI4)*60*100;
        var vpsqi4=v4/result;
        if(vpsqi4>=85) record.PSQIHSE="0";
        if(vpsqi4<85 && vpsqi4>=75) record.PSQIHSE="1";
        if(vpsqi4<75 && vpsqi4>=65) record.PSQIHSE="2";
        if(vpsqi4<65) record.PSQIHSE="3";
        record.PSQISLPQUAL=record.PSQI6;
        record.PSQIMEDS=record.PSQI7;
        record.PSQI=(
            parseInt(record.PSQIDURAT)+
            parseInt(record.PSQIDISTB)+
            parseInt(record.PSQILATEN)+
            parseInt(record.PSQIDAYDYS)+
            parseInt(record.PSQIHSE)+
            parseInt(record.PSQISLPQUAL)+
            parseInt(record.PSQIMEDS)).toString();
            $("#PSQI__ID").val(record.PSQI)
            $("#PSQIDURAT__ID").val(record.PSQIDURAT)
            $("#PSQIDISTB__ID").val(record.PSQIDISTB)
            $("#PSQILATEN__ID").val(record.PSQILATEN)
            $("#PSQIDAYDYS__ID").val(record.PSQIDAYDYS)
            $("#PSQIHSE__ID").val(record.PSQIHSE)
            $("#PSQISLPQUAL__ID").val(record.PSQISLPQUAL)
            $("#PSQIMEDS__ID").val(record.PSQIMEDS)

    }

    //--------------------------------------------------------
    var data={}; var a=$("#F__ID").serializeArray(); $.each(a, function () { data[this.name]=this.value || '';});
    var dbv={}
    //--------------------------------------------------------
    var req={cmd:"add_json_record_s2",db_pid:db_pid,data:data,dbv:dbv};
    if(rid!='') req={cmd:"modify_json_record_s2",rid:rid,db_pid:db_pid,data:data,dbv:dbv};
    $VmAPI.request({data:req,callback:function(res){
        if(res.ret<=0)	alert("Sorry there is a problem. You can try again later.")
        else{
            $vm.alert('The information has been successfully submitted')
            window.history.back(-1);
        }
    }});
    //--------------------------------------------------------
})
