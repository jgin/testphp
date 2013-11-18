<?php

namespace JASoft\Hrm\PayrollBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class IdentityDocumentTypeType extends AbstractType
{
        /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('acronym')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'JASoft\Hrm\PayrollBundle\Entity\IdentityDocumentType'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'jasoft_hrm_payrollbundle_identitydocumenttype';
    }
}
