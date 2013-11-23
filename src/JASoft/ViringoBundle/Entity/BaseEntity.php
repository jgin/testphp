<?php 

namespace JASoft\ViringoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * JASoft\ViringoBundle\Entity\BaseEntity
 * 
 * @ORM\MappedSuperclass
 */
class BaseEntity
{
    /**
     * @var boolean $active
     *
     * @ORM\Column(name="active", type="boolean")
     */
    private $active;
    
    /**
     * @var \DateTime $createdAt
     *
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @var integer $createdByUser
     *
     * @ORM\Column(name="createdByUser", type="integer")
     */
    private $createdByUser;

    /**
     * @var string $createdByIp
     *
     * @ORM\Column(name="createdByIp", type="string", length=50)
     */
    private $createdByIp;

    /**
     * @var \DateTime $updatedAt
     *
     * @ORM\Column(name="updatedAt", type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @var integer $updatedByUser
     *
     * @ORM\Column(name="updatedByUser", type="integer", nullable=true)
     */
    private $updatedByUser;
    
    /**
     * @var string $updatedByIp
     *
     * @ORM\Column(name="updatedByIp", type="string", length=50, nullable=true)
     */
    private $updatedByIp;
    
    /**
     * @var \DateTime $deletedAt
     *
     * @ORM\Column(name="deletedAt", type="datetime", nullable=true)
     */
    private $deletedAt;

    /**
     * @var integer $deletedByUser
     *
     * @ORM\Column(name="deletedByUser", type="integer", nullable=true)
     */
    private $deletedByUser;
    
    /**
     * @var string $deletedByIp
     *
     * @ORM\Column(name="deletedByIp", type="string", length=50, nullable=true)
     */
    private $deletedByIp;

    
    function __construct() {
        
    }

    
    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return BaseEntity
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    
        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set createdByUser
     *
     * @param integer $createdByUser
     * @return BaseEntity
     */
    public function setCreatedByUser($createdByUser)
    {
        $this->createdByUser = $createdByUser;
    
        return $this;
    }

    /**
     * Get createdByUser
     *
     * @return integer 
     */
    public function getCreatedByUser()
    {
        return $this->createdByUser;
    }

    /**
     * Set createdByIp
     *
     * @param string $createdByIp
     * @return BaseEntity
     */
    public function setCreatedByIp($createdByIp)
    {
        $this->createdByIp = $createdByIp;
    
        return $this;
    }

    /**
     * Get createdByIp
     *
     * @return string 
     */
    public function getCreatedByIp()
    {
        return $this->createdByIp;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return BaseEntity
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;
    
        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set updatedByUser
     *
     * @param integer $updatedByUser
     * @return BaseEntity
     */
    public function setUpdatedByUser($updatedByUser)
    {
        $this->updatedByUser = $updatedByUser;
    
        return $this;
    }

    /**
     * Get updatedByUser
     *
     * @return integer 
     */
    public function getUpdatedByUser()
    {
        return $this->updatedByUser;
    }

    /**
     * Set updatedByIp
     *
     * @param string $updatedByIp
     * @return BaseEntity
     */
    public function setUpdatedByIp($updatedByIp)
    {
        $this->updatedByIp = $updatedByIp;
    
        return $this;
    }

    /**
     * Get updatedByIp
     *
     * @return string 
     */
    public function getUpdatedByIp()
    {
        return $this->updatedByIp;
    }

    /**
     * Set deletedAt
     *
     * @param \DateTime $deletedAt
     * @return BaseEntity
     */
    public function setDeletedAt($deletedAt)
    {
        $this->deletedAt = $deletedAt;
    
        return $this;
    }

    /**
     * Get deletedAt
     *
     * @return \DateTime 
     */
    public function getDeletedAt()
    {
        return $this->deletedAt;
    }

    /**
     * Set deletedByUser
     *
     * @param integer $deletedByUser
     * @return BaseEntity
     */
    public function setDeletedByUser($deletedByUser)
    {
        $this->deletedByUser = $deletedByUser;
    
        return $this;
    }

    /**
     * Get deletedByUser
     *
     * @return integer 
     */
    public function getDeletedByUser()
    {
        return $this->deletedByUser;
    }

    /**
     * Set deletedByIp
     *
     * @param string $deletedByIp
     * @return BaseEntity
     */
    public function setDeletedByIp($deletedByIp)
    {
        $this->deletedByIp = $deletedByIp;
    
        return $this;
    }

    /**
     * Get deletedByIp
     *
     * @return string 
     */
    public function getDeletedByIp()
    {
        return $this->deletedByIp;
    }
}