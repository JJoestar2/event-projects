<?php

namespace App\Console\Commands;

use App\Models\Event;
use Illuminate\Console\Command;

class ChangeStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'event:status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check and change events status';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $event = new Event;
        $event->changeStatus();
    }
}
