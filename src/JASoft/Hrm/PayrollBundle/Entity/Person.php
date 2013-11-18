<?php

namespace JASoft\Hrm\PayrollBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Person
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="JASoft\Hrm\PayrollBundle\Repository\PersonRepository")
 */
class Person
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
     * @ORM\Column(name="firstName", type="string", length=255)
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="lastName", type="string", length=255)
     */
    private $lastName;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="birthDate", type="date")
     */
    private $birthDate;
    
    /**
     * @var IdentityDocumentType
     *
     * @ORM\ManyToOne(targetEntity="IdentityDocumentType")
     * @ORM\JoinColumn(name="identityDocumentTypeId", referencedColumnName="id")
     */
    private $identityDocumentType;


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
     * Set firstName
     *
     * @param string $firstName
     * @return Person
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    
        return $this;
    }

    /**
     * Get firstName
     *
     * @return string 
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     * @return Person
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    
        return $this;
    }

    /**
     * Get lastName
     *
     * @return string 
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set birthDate
     *
     * @param \DateTime $birthDate
     * @return Person
     */
    public function setBirthDate($birthDate)
    {
        $this->birthDate = $birthDate;
    
        return $this;
    }

    /**
     * Get birthDate
     *
     * @return \DateTime 
     */
    public function getBirthDate()
    {
        return $this->birthDate;
    }

    /**
     * Set identityDocumentType
     *
     * @param \JASoft\Hrm\PayrollBundle\Entity\IdentityDocumentType $identityDocumentType
     * @return Person
     */
    public function setIdentityDocumentType(\JASoft\Hrm\PayrollBundle\Entity\IdentityDocumentType $identityDocumentType = null)
    {
        $this->identityDocumentType = $identityDocumentType;
    
        return $this;
    }

    /**
     * Get identityDocumentType
     *
     * @return \JASoft\Hrm\PayrollBundle\Entity\IdentityDocumentType 
     */
    public function getIdentityDocumentType()
    {
        return $this->identityDocumentType;
    }
}