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
