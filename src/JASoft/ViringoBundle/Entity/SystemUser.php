<?php

namespace JASoft\ViringoBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * ORM\Table()
 * ORM\Entity(repositoryClass="JASoft\ViringoBundle\Repository\SystemUserRepository")
 * @ORM\MappedSuperclass
 */
//class SystemUser extends BaseEntity implements \Symfony\Component\Security\Core\User\UserInterface {
class SystemUser extends \FOS\UserBundle\Entity\User {
//
//    /**
//     * @var integer
//     *
//     * @ORM\Column(name="id", type="integer")
//     * @ORM\Id
//     * @ORM\GeneratedValue(strategy="AUTO")
//     */
//    protected $id;

}
