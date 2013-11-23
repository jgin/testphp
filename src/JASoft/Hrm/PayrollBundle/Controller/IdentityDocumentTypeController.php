<?php

namespace JASoft\Hrm\PayrollBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use JASoft\Hrm\PayrollBundle\Entity\IdentityDocumentType;
use JASoft\Hrm\PayrollBundle\Form\IdentityDocumentTypeType;

/**
 * IdentityDocumentType controller.
 *
 * @Route("/rest/idt")
 */
class IdentityDocumentTypeController extends Controller
{

    /**
     * Lists all IdentityDocumentType entities.
     *
     * @Route("/", name="idt")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    
    /**
     * Lists all IdentityDocumentType entities.
     *
     * @Route("/list.htm", name="idt_list", defaults={"_format":"json"})
     * @Method("GET")
     * Template("JASoftHrmPayrollBundle:Default:json_response.json.twig")
     */
    public function listAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->findAll();

        $jsonEntities=$this->get('serializer')->serialize($entities, 'json');
        return new \Symfony\Component\HttpFoundation\Response($jsonEntities);
//        return array('data'=>$entities);
    }
    
    /**
     * Lists all IdentityDocumentType entities.
     *
     * @Route("/register.htm", name="idt_register")
     * @Method("POST")
     */
    public function registerAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->findAll();

        $jsonEntities=$this->get('serializer')->serialize($entities, 'json');
        return new \Symfony\Component\HttpFoundation\Response($jsonEntities);
    }
    
    /**
     * Creates a new IdentityDocumentType entity.
     *
     * @Route("/", name="idt_create")
     * @Method("POST")
     * @Template("JASoftHrmPayrollBundle:IdentityDocumentType:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity = new IdentityDocumentType();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('idt_show', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
    * Creates a form to create a IdentityDocumentType entity.
    *
    * @param IdentityDocumentType $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createCreateForm(IdentityDocumentType $entity)
    {
        $form = $this->createForm(new IdentityDocumentTypeType(), $entity, array(
            'action' => $this->generateUrl('idt_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new IdentityDocumentType entity.
     *
     * @Route("/new", name="idt_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction()
    {
        $entity = new IdentityDocumentType();
        $form   = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Finds and displays a IdentityDocumentType entity.
     *
     * @Route("/{id}", name="idt_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find IdentityDocumentType entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing IdentityDocumentType entity.
     *
     * @Route("/{id}/edit", name="idt_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find IdentityDocumentType entity.');
        }

        $editForm = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
    * Creates a form to edit a IdentityDocumentType entity.
    *
    * @param IdentityDocumentType $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm(IdentityDocumentType $entity)
    {
        $form = $this->createForm(new IdentityDocumentTypeType(), $entity, array(
            'action' => $this->generateUrl('idt_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
    /**
     * Edits an existing IdentityDocumentType entity.
     *
     * @Route("/{id}", name="idt_update")
     * @Method("PUT")
     * @Template("JASoftHrmPayrollBundle:IdentityDocumentType:edit.html.twig")
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find IdentityDocumentType entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('idt_edit', array('id' => $id)));
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }
    /**
     * Deletes a IdentityDocumentType entity.
     *
     * @Route("/{id}", name="idt_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('JASoftHrmPayrollBundle:IdentityDocumentType')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find IdentityDocumentType entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('idt'));
    }

    /**
     * Creates a form to delete a IdentityDocumentType entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('idt_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm()
        ;
    }
}
