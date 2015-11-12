<?php
/**
 * Static content controller.
 *
 * This file will render views from views/pages/
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

App::uses('AppController', 'Controller');

/**
 * Static content controller
 *
 * Override this controller by placing a copy in controllers directory of an application
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class HackathonController extends AppController {

/**
 * This controller does not use a model
 *
 * @var array
 */
	public $uses = array();

/**
 * Displays a view
 *
 * @return void
 * @throws NotFoundException When the view file could not be found
 *	or MissingViewException in debug mode.
 */
	

	public function test1(){

	}

	public function thanksgiving(){
		$bless_content = 0;
		$from_email = 0;
		$to_email = 0;
		if (isset($this->request->query["content"])) {
			$bless_content = $this->request->query["content"];
						
		}
		
			
		/*debug($bless_content);
		debug($from_email);
		debug($to_email);*/
		if(!$bless_content){
			$this->set("semaphore",0);
			$this->set("bless_content","Please edit your greetings");
		}else{
			$this->set("semaphore",1);
			$this->set("bless_content", $bless_content);
			
		}
			
		
				
	}
}