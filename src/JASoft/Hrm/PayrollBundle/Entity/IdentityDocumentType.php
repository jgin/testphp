<?php

namespace JASoft\Hrm\PayrollBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * IdentityDocumentType
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="JASoft\Hrm\PayrollBundle\Repository\IdentityDocumentTypeRepository")
 */
class IdentityDocumentType
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="acronym", type="string", length=50)
     */
    private $acronym;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return IdentityDocumentType
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set acronym
     *
     * @param string $acronym
     * @return IdentityDocumentType
     */
    public function setAcronym($acronym)
    {
        $this->acronym = $acronym;
    
        return $this;
    }

    /**
     * Get acronym
     *
     * @return string 
     */
    public function getAcronym()
    {
        return $this->acronym;
    }
    
    public function __toString() {
        return $this->acronym;
    }

}