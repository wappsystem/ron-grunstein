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
//        record.DASS_DS=((parseInt($("input[name='DASS_3']:checked").val())+parseInt($("input[name='DASS_5']:checked").val())+parseInt($("input[name='DASS_10']:checked").val())+parseInt($("input[name='DASS_13']:checked").val())+parseInt($("input[name='DASS_16']:checked").val())+parseInt($("input[name='DASS_17']:checked").val())+parseInt($("input[name='DASS_21']:checked").val()))*2).toString();
//        record.DASS_AS=((parseInt($("input[name='DASS_2']:checked").val())+parseInt($("input[name='DASS_4']:checked").val())+parseInt($("input[name='DASS_7']:checked").val())+parseInt($("input[name='DASS_9']:checked").val())+parseInt($("input[name='DASS_15']:checked").val())+parseInt($("input[name='DASS_19']:checked").val())+parseInt($("input[name='DASS_20']:checked").val()))*2).toString();
//        record.DASS_SS=((parseInt($("input[name='DASS_1']:checked").val())+parseInt($("input[name='DASS_6']:checked").val())+parseInt($("input[name='DASS_8']:checked").val())+parseInt($("input[name='DASS_11']:checked").val())+parseInt($("input[name='DASS_12']:checked").val())+parseInt($("input[name='DASS_14']:checked").val())+parseInt($("input[name='DASS_18']:checked").val()))*2).toString();
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

    //--------------------------------------------------------
    var data={}; var a=$("#F__ID").serializeArray(); $.each(a, function () { data[this.name]=this.value || '';});
    var dbv={}
    //--------------------------------------------------------
    var req={cmd:"add_json_record_s2",db_pid:db_pid,data:data,dbv:dbv};
    if(rid!='') req={cmd:"modify_json_record_s2",rid:rid,db_pid:db_pid,data:data,dbv:dbv};
    $VmAPI.request({data:req,callback:function(res){
        if(res.ret<=0)	alert("Sorry there is a problem. You can try again later.")
        else{
            $vm.alert('Your data has been successfully submitted')
            window.history.back(-1);
        }
    }});
    //--------------------------------------------------------
})
