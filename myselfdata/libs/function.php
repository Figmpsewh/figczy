<?php
class unit{
    function __construct(){
        $this->str='';
        $this->parentid=null;
    }
    //cateTree(0,$mysql,'fl',0)
    function  cateTree($pid,$db,$table,$flag,$current=null){
        $flag++;
        if ($current){
            $sql="select * from $table where cid=$current";
            $data = $db->query($sql)->fetch_assoc();
            $this->parentid=$data['pid'];
        }
        $sql="select * from $table where pid={$pid}";
        $result = $db->query($sql);
        while($row=$result->fetch_assoc()){
            if ($row['cid']==$this->parentid){
                $this->str.="
              <option value='{$row['cid']}' selected>$flag{$row['cname']}</option>";
            }else{
            $this->str.="
              <option value={$row['cid']}>$flag{$row['cname']}</option>
            ";
            }
            $this->cateTree($row['cid'],$db,$table,$flag,$current);
        }
        return $this->str;
    }
    function cateTable($db,$table){
        $sql = "select * from $table";
        $result = $db->query($sql)->fetch_all(1);
        for($i=0;$i<count($result);$i++){
            $this->str .="
             <tr>
                    <td>{$result[$i]{'cid'}}</td>
                    <td>{$result[$i]{'cname'}}</td>
                    <td>{$result[$i]{'pid'}}</td>
                    <td>
                        <a href=\"deleteCate.php?cid={$result[$i]['cid']}\" class='btn'>删除</a>
                        <a href=\"updateCate.php?cid={$result[$i]['cid']}\" class='btn btnADD'>修改</a>
                    </td>
                </tr>
            ";
        }
        return $this->str;
    }
    function selectOne($db,$table,$id,$attr){
        $sql="select $attr from $table where cid=$id";
//        var_dump($sql);
//            exit();
        $data=$db->query($sql)->fetch_assoc();
        return $data[$attr];
    }
}