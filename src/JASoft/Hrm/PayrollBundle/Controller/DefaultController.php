<?php

namespace JASoft\Hrm\PayrollBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class DefaultController extends Controller
{
    /**
     * @Route("/hello/{name}")
     * @Template()
     */
    public function helloAction($name)
    {
        return array('name' => $name);
    }
    
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        return array('global' => $this->getGlobalValues());
    }
    
    private function getGlobalValues() {
        return array(
            'resources' => array (
                'baseUrl' => 'http://localhost/payroll/bundles/hrmpayroll'
            )
        );
    }
    
    /**
     * Lists all Permissions
     *
     * @Route("/rest/systemSecurityRole/getGrantedEntityRoles.htm", name="default_grantedEntityRoles")
     * @Method("GET")
     */
    public function getGrantedEntityRoles() {
        $data = array(
            'data' => array (
                'list' => array('checked'=>true),
                'create' => array('checked'=>true),
                'update' => array('checked'=>true),
                'delete' => array('checked'=>true),
                'export' => array('checked'=>true)
            ),
            'success' => true
        );

        $jsonEntities=$this->get('serializer')->serialize($data, 'json');
        return new \Symfony\Component\HttpFoundation\Response($jsonEntities);
    }
    
    /**
     * Lists all Permissions
     *
     * @Route("/test", name="default_test")
     * @Method("GET")
     */
    public function testAction() {
        $idt=new \JASoft\Hrm\PayrollBundle\Entity\IdentityDocumentType();
        $idt->setName("DNI");
        
        $data=new \JASoft\Hrm\PayrollBundle\Entity\Person();
        $data->setFirstName("Luis")
                ->setLastName("Vercelli Hidalgo")
                ->setIdentityDocumentType($idt);
        var_dump($data);
        
        $jsonData=$this->get('serializer')->serialize($data, 'json');
        var_dump($jsonData);
        
        $desData=$this->get('serializer')->deserialize($jsonData, 'JASoft\Hrm\PayrollBundle\Entity\Person', 'json');
        var_dump($desData);
        
        return new \Symfony\Component\HttpFoundation\Response();
    }
}
