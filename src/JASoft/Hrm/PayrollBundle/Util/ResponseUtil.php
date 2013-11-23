<?php

namespace JASoft\Hrm\PayrollBundle\Util;

/**
 * Utilidad para generar respuestas estándar en los controladores
 *
 * @author gin
 */
class ResponseUtil {
    
    public static function getJsonResponse($data) {
        $result=array();
        if ($data instanceof \Exception) {
            $result['success']=false;
            $result['message']=$data->getMessage();
        } else {
            $result['success']=true;
            $result['data']=$data;
        }
        
    }
}
